import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(`${MONGODB_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB is connected ..');
  } catch (err) {
    console.error("ee ",err.message);
    process.exit(1);
  }
};

export default db;