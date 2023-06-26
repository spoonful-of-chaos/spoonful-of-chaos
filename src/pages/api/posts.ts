import { getSortedPostsData } from '@/lib/posts'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  content: string; 
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  
  res.status(200).json(getSortedPostsData())
}
