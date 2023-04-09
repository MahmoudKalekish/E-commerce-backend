import mongoose from "mongoose";
import colors from "colors";
const uri = `mongodb+srv://mahdi:mahdi2747@cluster0.tdyayk8.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri,process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;