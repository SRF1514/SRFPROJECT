import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase URL and Public Key
const SUPABASE_URL = "https://uhfbvyjnzodcrqsdmhtt.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_Bckgxe5dTK_4Np9sCoISbA_p7NaRW1V";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
