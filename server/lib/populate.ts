import Item from '../models/Item'
import fetch from './fetch'

const extractUrlFromTweet = url =>
  url.expanded_url || url.url || `//${url.display_url}`

const dropUrlFromText = url => url.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')

const insert = async (screenName: string, tweet: any) => {
  const { urls, media } = tweet.entities
  const firstUrl = urls && urls.length && urls[0]
  const firstMedia = media && media.length && media[0]
  const url = firstUrl || firstMedia

  if (!url) {
    return
  }

  const params = {
    id: tweet.id,
    provider: screenName,
    text: dropUrlFromText(tweet.text),
    url: extractUrlFromTweet(url),
    mediaUrl: firstMedia && firstMedia.media_url_https,
    createdAt: tweet.created_at
  }
  Item.findOneAndUpdate(
    { id: tweet.id },
    params,
    { upsert: true, new: true },
    (error, newItem) => {
      if (!error) {
        console.warn({ newItem })
      }
    }
  )
}

const populate = async (screenName: string) => {
  const tweets = await fetch(screenName)
  return new Promise(resolve => {
    tweets.forEach(tweet => {
      insert(screenName, tweet)
    })
    resolve()
  }).catch(error => {
    console.log('caught', error.message)
  })
}

export default populate
