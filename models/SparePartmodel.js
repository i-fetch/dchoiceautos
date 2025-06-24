// models/SparePart.js
import mongoose from 'mongoose';

const sparePartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String },
  price: { type: String, required: true },
  image: { type: String },
  isFeatured: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  isNewArrival: { type: Boolean, default: false },
  discount: { type: String }, // optional discount badge text
});

export default mongoose.models?.SparePart || mongoose.model('SparePart', sparePartSchema);
