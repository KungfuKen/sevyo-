import { createClient } from '@supabase/supabase-js'

const Url = process.env.REACT_APP_SUPABASE_URL
const Key = process.env.REACT_APP_SUPABASE_ANON_KEY

export default createClient(Url, Key)