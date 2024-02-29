// // pages/api/sync-user.js
// import { NextApiRequest, NextApiResponse } from 'next';
// import { supabaseClient } from '../../../utils/supabase'; // Ensure this points to your Supabase client setup

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Extract the Authorization header where the Clerk JWT is expected
//   const token = req.headers.authorization?.split('Bearer ')[1];
//   if (!token) {
//     return res.status(401).json({ error: 'Authorization header is missing' });
//   }

//   // Here, you might verify the Clerk JWT if necessary for your application logic
  
//   // Example Supabase operation to insert/update the user data
//   // Assuming you've extracted or determined the necessary user data (e.g., clerkUserId, displayName)
//   const { data, error } = await supabaseClient
//     .from('Post')
//     .upsert({
//       clerk_user_id: 'clerkUserId', // Replace with actual user ID from Clerk
//       clerk_username: 'UserDisplayName', // Replace with actual display name
//     }, {
//       returning: 'minimal', // Optional: Adjust based on your needs
//     });

//   if (error) {
//     console.error('Error syncing user to Supabase:', error);
//     return res.status(500).json({ error: 'Failed to sync user data' });
//   }

//   return res.status(200).json({ message: 'User synced successfully' });
// }
