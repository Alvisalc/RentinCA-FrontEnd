// import { createClient } from "@supabase/supabase-js";

// export const SupabaseClient = async (supabaseToken: any) => {
//     const supabase = createClient(
//         process.env.EXT_PUBLIC_SUPABASE_URL || '',
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
//         {
//             global: {headers:{ Authorization: `Bearer ${supabaseToken}`}},
//         }
//     );

//     return supabase;
// };


// import { createClient, SupabaseClient } from "@supabase/supabase-js";

// export const createSupabaseClient = (supabaseToken: string): SupabaseClient => {
//   const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
//   const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

//   const supabase = createClient(
//     supabaseUrl,
//     supabaseAnonKey,
//     {
//       global: {
//         headers: { Authorization: `Bearer ${supabaseToken}` }
//       },
//     }
//   );

//   return supabase;
// };
