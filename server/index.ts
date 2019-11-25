import 'module-alias/register';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import nextjs from 'server/lib/next';
import dotenv from 'dotenv';

import Item from './models/Item';

dotenv.config();

const app: express.Application = express();

nextjs.nextApp.prepare().then(async () => {
  const port = process.env.PORT || 8000;

  mongoose
    .connect('mongodb://db:27017/1Balita', {
      useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

  app.use(
    morgan(':method :url :status', {
      skip: (req: express.Request) => req.url.startsWith('/_next/')
    })
  );
  app.use(express.json());
  app.use(express.static('public'));

  // app.get('/api', (req, res) => {
  //   Item.find()
  //     .then(items => res.json(items))
  //     .catch(err => res.status(404).json({ msg: 'No items found' }));
  // });

  app.get('*', (req, res) => {
    nextjs.handle(req, res);
  });

  app.listen(port, () => {
    console.log(`\n\nstarted on port ${port}\n\n`);
  });
});
