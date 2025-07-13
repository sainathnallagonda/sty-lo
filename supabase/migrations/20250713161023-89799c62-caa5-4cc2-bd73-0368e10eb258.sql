
-- Add new columns to waitlist_signups table for enhanced features
ALTER TABLE public.waitlist_signups 
ADD COLUMN phone text,
ADD COLUMN interested_services jsonb DEFAULT '[]'::jsonb,
ADD COLUMN early_access_bonus boolean DEFAULT true;
