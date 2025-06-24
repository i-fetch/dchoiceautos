import mongoose from 'mongoose';
import 'dotenv/config'; // ensures .env works
import User from './models/User.js';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected ✅');
  } catch (err) {
    console.error('MongoDB connection error ❌:', err.message);
    process.exit(1);
  }
};

const seeduser = async () => {
  await connectDB();

  const existingUser = await User.findOne({ email: 'autoparts@gmail.com' });

  if (existingUser) {
    console.log('User already exists.');
    return process.exit();
  }

  const user = new User({
    name: 'autoparts',
    email: 'autoparts@gmail.com',
    password: 'thegoodstuff123', // Will be hashed automatically
  });

  await user.save();
  console.log('✅ user user created successfully!');
  process.exit();
};

seeduser();
