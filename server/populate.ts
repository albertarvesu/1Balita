import mongoose from 'mongoose';

import Item from './models/Item';
import fetch from './lib/fetch';

mongoose
  .connect('mongodb://localhost:27017/1Balita', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const insertTweet = (screenName: string, tweet: any) => {
  const { urls, media } = tweet.entities;
  const url = urls[0] || media;
  const params = {
    id: tweet.id,
    provider: screenName,
    text: tweet.text,
    url: url.expanded_url || url.url || `//${url.display_url}`,
    createdAt: tweet.created_at
  };
  Item.findOneAndUpdate(
    { id: tweet.id },
    params,
    { upsert: true, new: true },
    (_, item) => {
      console.warn(item);
    }
  );
};

const start = async (screenName: string) => {
  const tweets = await fetch(screenName);
  tweets.forEach(tweet => {
    insertTweet(screenName, tweet);
  });
};

start('@gmanews');

// const brief = await new Brief(createBrief()).save()

// name: String,
// imageUrl: String,
// addedAt: {
//   type: Date,
//   default: Date.now
// }

// Provider.count({}, async (_, count) => {
//   console.warn({ count });
//   if (count == 0) {
//     await new Provider({
//       name: '@ABSCBNNews',
//       imageUrl:
//         'https://pbs.twimg.com/profile_images/1194096034722435072/kfkit_H8_normal.jpg'
//     }).save();
//     await new Provider({
//       name: '@gmanews',
//       imageUrl:
//         'https://pbs.twimg.com/profile_images/1131064290998231041/3by86sfl_normal.png'
//     }).save();
//     await new Provider({
//       name: '@inquirerdotnet',
//       imageUrl:
//         'https://pbs.twimg.com/profile_images/1176785678694141952/zhu6Qz3__normal.png'
//     }).save();
//   }
// });

// const list = async () => {
//   const result = await Provider.find({}).exec();
//   console.warn({ result });
// };

// list();
