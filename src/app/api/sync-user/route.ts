// pages/api/sync-user.js
import { NextApiRequest, NextApiResponse } from 'next';
import clerk from '../../../utils/clerkBackend'; // Your initialized Clerk backend instance

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Extract the session token from the Authorization header
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is missing.' });
    }

    // Manually verify the session token
    // Note: Adjust this part according to the correct Clerk backend SDK usage for your version
    const session = await clerk.verifyToken(token); // Assuming verifyToken is the correct method

    // Proceed with syncing user data to Supabase or other logic
    res.status(200).json({ message: 'User session verified.', session });
  } catch (error) {
    console.error('Session verification failed:', error);
    return res.status(500).json({ error: 'Failed to verify session.' });
  }
}
