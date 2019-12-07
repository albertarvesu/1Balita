import express from 'express';

import Item from './../models/Item';
import populate from './../lib/populate';

const router = express.Router();
const LIMIT = 15;

router
  .get('/news', (req, res) => {
    const { provider } = req.query;
    Item.find({ provider })
      .sort('-id')
      .limit(LIMIT)
      .then(items => res.json(items))
      .catch(() => res.status(404).json({ msg: 'No items found' }));
  })
  .post('/news', (req, res) => {
    const { provider } = req.body;
    populate(provider).then(() => {
      res.status(200).json({ msg: 'Success' });
    });
  });

export default router;
