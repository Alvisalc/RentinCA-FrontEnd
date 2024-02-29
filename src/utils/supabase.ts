// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// import { createClient } from "@supabase/supabase-js";

// export const supabaseClient = async (supabaseAccessToken: string) => {
//     const supabase = createClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//         {
//             global: {headers: {Authorization: `Bearer ${supabaseAccessToken}`}}
//         }
//     )

//     // set Supabase JWT on the client object
//     // so it is sent up with all Supabase requests
//     return supabase;
// }


// We can now use anywhere when the user sign-in to our application


// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
