import { MongoClient, Db } from 'mongodb'

import {MONGODB_URI, MONGODB_DB} from './url'


let uri = MONGODB_URI

let dbname = MONGODB_DB


let cachedClient:MongoClient
let cachedDb:Db

if (!uri) {
  console.log('error sem uri')
}

if (!dbname) {
  console.log('error sem db')
}

export async function ConnectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb}
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = await client.db(dbname)

  cachedClient = client

  cachedDb = db

  return {client, db}


}