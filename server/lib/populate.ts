import Item from '../models/Item';
import fetch from './fetch';

const extractUrlFromTweet = url =>
  url.expanded_url || url.url || `//${url.display_url}`;

const dropUrlFromText = url => url.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');

const insert = async (screenName: string, tweet: any) => {
  const { urls, media } = tweet.entities;
  const url = urls[0] || media;
  const params = {
    id: tweet.id,
    provider: screenName,
    text: dropUrlFromText(tweet.text),
    url: extractUrlFromTweet(url),
    createdAt: tweet.created_at
  };
  Item.findOneAndUpdate(
    { id: tweet.id },
    params,
    { upsert: true, new: true },
    error => {
      console.warn({ error });
    }
  );
};

const populate = async (screenName: string) => {
  const tweets = await fetch(screenName);
  return new Promise(resolve => {
    tweets.forEach(tweet => {
      insert(screenName, tweet);
    });
    resolve();
  });
};

export default populate;
