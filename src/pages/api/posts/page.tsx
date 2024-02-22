import { supabase } from '../../../db/supabase';

export default async function handler(req, res) {
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error('Error fetching posts:', error);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }

  res.status(200).json(data);
}
