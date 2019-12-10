import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  provider: String,
  text: String,
  url: {
    type: String,
    required: true
  },
  mediaUrl: String,
  createdAt: String,
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const Item = mongoose.model('item', ItemSchema);

export default Item;
