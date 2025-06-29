-- Create newsletter subscriptions table
CREATE TABLE public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true
);

-- Create contact submissions table
CREATE TABLE public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions" ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anonymous users can submit)
CREATE POLICY "Allow anonymous insert newsletter"
  ON public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions"
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert contact"
  ON public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_newsletter_email ON public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions"(email);
CREATE INDEX idx_contact_email ON public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"(email);
CREATE INDEX idx_contact_status ON public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"(status);

-- Add comments
COMMENT ON TABLE public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions" IS 'Newsletter email subscriptions';
COMMENT ON TABLE public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions" IS 'Contact form submissions from website visitors';
COMMENT ON COLUMN public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions".email IS 'Subscriber email address';
COMMENT ON COLUMN public."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions".status IS 'Submission status (new, read, replied, etc.)';