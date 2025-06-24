
-- Create partner applications table
CREATE TABLE public.partner_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  business_type TEXT,
  website TEXT,
  description TEXT,
  services_offered TEXT[],
  experience_years INTEGER,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create early access signups table
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  use_case TEXT,
  interested_services TEXT[],
  referral_source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create waitlist signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  notification_preferences JSONB DEFAULT '{"email": true, "sms": false}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for partner applications
ALTER TABLE public.partner_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit partner applications" 
  ON public.partner_applications 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own partner applications" 
  ON public.partner_applications 
  FOR SELECT 
  USING (true);

-- Add RLS policies for early access signups
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit early access signups" 
  ON public.early_access_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Add RLS policies for waitlist signups
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit waitlist signups" 
  ON public.waitlist_signups 
  FOR INSERT 
  WITH CHECK (true);
