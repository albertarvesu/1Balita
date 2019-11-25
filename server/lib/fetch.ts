const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY || '',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || ''
});

const options = {
  exclude_replies: true,
  include_rts: false
};

export const fetch = async (screenName: string) => {
  try {
    return await client.get('statuses/user_timeline', {
      ...options,
      screen_name: screenName
    });
  } catch (e) {
    return undefined;
  }
};

export default fetch;
