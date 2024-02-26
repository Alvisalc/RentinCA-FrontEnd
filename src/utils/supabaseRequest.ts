import { SupabaseClient } from "@supabase/supabase-js";

const type 

export const getPosts = async ({ userId, token}) =>{
    const supabase = await SupabaseClient(token);
    const {data: posts} = await supabase
        .from("post")
        .select("*")
        .eq("user_id", userId);
    return Posts;
};