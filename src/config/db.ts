import * as mongo from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


let connectionObj: any;


const { DATABASE_URL,DATABASE_NAME } = process.env;
console.log(`${DATABASE_URL}${DATABASE_NAME}`)

const handle = (promise: any) => {
  return promise
    .then((data: mongo.MongoClient) => ([data, undefined]))
    .catch((error: any) => Promise.resolve([undefined, error]));
};

const init = async () => {
  console.log('Connecting to DB');
  let [connection, connectionErr] = await handle(
    mongoose.connect(`${DATABASE_URL}${DATABASE_NAME}` )
  );

  if (connectionErr) {
    console.log("Error:", connectionErr);
    console.log(`Could not connect to MongoDB`);
  } else {
    connectionObj = connection;
    console.log(`MongoDB Client Connected`);
  }
};

export { init, connectionObj };
