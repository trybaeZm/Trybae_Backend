const { createClient } =  require('@supabase/supabase-js')

const supabaseUrl = 'https://zdyzvvhqlrjxefykdgmf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = {
    supabase
}