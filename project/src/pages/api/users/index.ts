import { NextApiRequest, NextApiResponse } from 'next'

import {ConnectToDatabase} from '../../../utils/mongodb'
const handler = async(_req: NextApiRequest, res: NextApiResponse) => {
  try {
    // acesso ao mongodb
    const { db } = await ConnectToDatabase()
    const data = await db.collection('saidas').find().toArray()

    res.status(200).json(data)

    
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
