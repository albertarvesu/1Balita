import 'module-alias/register';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import nextjs from './lib/next';
import dotenv from 'dotenv';

dotenv.config();

import router from './router';

const app: express.Application = express();

nextjs.nextApp.prepare().then(async () => {
  const port = process.env.PORT || 3000;

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

  app.use(router);

  app.get('*', (req, res) => {
    nextjs.handle(req, res);
  });

  app.listen(port, () => {
    console.log(`\n\nstarted on port ${port}\n\n`);
  });
});
