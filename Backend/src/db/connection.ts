import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to DataBase");
  }
}

async function disconnectToDatabasse() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cancot Disconnect to Database");
  }
}

export { connectToDatabase, disconnectToDatabasse };
