import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://znwxeicqrpnsrkqzkdun.supabase.co"
const supabaseAnonKey = "sb_publishable_2xot0JDk2c2lLFJ_eWl4YA_O4Wih-wTk"
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
