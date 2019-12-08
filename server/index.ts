import 'module-alias/register';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import nextjs from './lib/next';
import router from './router';
import job from './job';

const app: express.Application = express();

nextjs.nextApp.prepare().then(async () => {
  const port = process.env.PORT || 3000;

  mongoose
    .connect(process.env.MONGODB_URI || 'http://localhost:27017', {
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

  job.start();

  app.get('*', (req, res) => {
    nextjs.handle(req, res);
  });

  app.listen(port, () => {
    console.log(`\n\nstarted on port ${port}\n\n`);
  });
});
