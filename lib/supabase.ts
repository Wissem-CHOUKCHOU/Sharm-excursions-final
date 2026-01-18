import { createClient } from '@supabase/supabase-js'

// Next.js va lire ces valeurs dans l'environnement Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Sécurité : On vérifie que les clés sont présentes
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Configuration Supabase manquante dans l'environnement");
  }

  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
  