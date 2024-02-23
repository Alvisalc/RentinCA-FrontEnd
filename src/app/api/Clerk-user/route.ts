// pages/api/secure-data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ClerkServerAPI } from '@clerk/clerk-sdk-node';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const clerk = ClerkServerAPI.withApiKey(process.env.CLERK_API_KEY);
  const sessionToken = req.headers.authorization?.split('Bearer ')[1];

  if (!sessionToken) {
    return res.status(401).json({ error: 'No authorization token provided' });
  }

  try {
    const session = await clerk.sessions.verifySession(sessionToken);
    // Proceed with your secure logic here
    res.status(200).json({ message: 'Secure data' });
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
