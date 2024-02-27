// import { SupabaseClient } from "@supabase/supabase-js";
// import supabase from "./supabaseClient";

// interface GetPostsParams {
//     userId: string;
//     token: string;
// }

// interface Post {
//     id: number;
//     title: string;
// }

// // Define the async function to fetch posts, correctly typing the parameters and return type
// export const getPosts = async ({ userId, token }: GetPostsParams): Promise<Post[]> => {
//     // Set the Authorization header for the request
//     supabase.auth.session = () => ({
//       access_token: token,
//       token_type: "bearer",
//       user: null,
//       expires_in: 3600,
//       expires_at: 0,
//       refresh_token: ""
//     });

//     // Perform the query to fetch posts
//     const { data: posts, error } = await supabase
//         .from<Post>('posts') // Use 'posts' if your table is named 'posts'
//         .select('*')
//         .eq('user_id', userId);

//     if (error) {
//         throw new Error(`Failed to fetch posts: ${error.message}`);
//     }

//     return posts || [];
// };