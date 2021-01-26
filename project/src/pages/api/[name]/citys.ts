import { NextApiRequest, NextApiResponse } from 'next'


const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    const { query } = _req;
    

    res.status(200).json([
      {
      id: 1,
      name: 'CampoGrande',
      fundacao: 1925,
      query

      },
      {
        id: 2,
        name: 'Porto Seguro',
        fundacao: 1512,
        query
      }
    ])
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
