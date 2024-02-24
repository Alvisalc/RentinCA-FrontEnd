// Sync the authenticated users info from Clerk to Supabase database

import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from '@clerk/clerk-sdk-node';
import { supabase } from '../../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Assuming the Bearer token is passed in the authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Authorization token is missing' });
    }

    // Verify the session with Clerk
    const session = await getSession(token);
    const userId = session.userId;

    // Sync user data to Supabase
    const { error } = await supabase
      .from('users')
      .upsert({ id: userId }, { returning: 'minimal' });

    if (error) throw new Error('Failed to sync user data');

    res.status(200).json({ message: 'User synced successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || 'An error occurred during user sync' });
  }
}
