// Endpoint for authenticated operations, e.g. fetching user data or actions that require user authentication.

import { sessions } from '@clerk/clerk-sdk-node';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No authorization token provided' });
    }

    // Use the Clerk SDK's sessions.verifySession directly without instantiating a new object
    const session = await sessions.verifySession(token);

    // Proceed with your API logic...
    res.status(200).json({ message: 'Protected content' });
  } catch (error) {
    // Handle errors, such as invalid token
    return res.status(401).json({ error: 'Unauthorized' });
  }
}
