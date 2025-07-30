import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gormpkgtknhdbjrnkzpk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvcm1wa2d0a25oZGJqcm5renBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4ODA0MTksImV4cCI6MjA2OTQ1NjQxOX0.eUkEV7_YZPLDKUy1BL78Ct4i2FFZpQe1hhhmhyJvgcs';
export const supabase = createClient(supabaseUrl, supabaseKey);
