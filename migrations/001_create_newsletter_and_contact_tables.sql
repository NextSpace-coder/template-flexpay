-- 创建邮件订阅表
CREATE TABLE IF NOT EXISTS "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true,
    user_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建联系信息表
CREATE TABLE IF NOT EXISTS "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_read BOOLEAN DEFAULT false,
    user_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 启用行级安全 (RLS)
ALTER TABLE "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions" ENABLE ROW LEVEL SECURITY;

-- 为邮件订阅表创建策略
CREATE POLICY "Allow anonymous insert for newsletter subscriptions"
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions"
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "Allow service role full access to newsletter subscriptions"
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions"
    FOR ALL
    TO service_role
    USING (true);

-- 为联系信息表创建策略
CREATE POLICY "Allow anonymous insert for contact submissions"
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "Allow service role full access to contact submissions"
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"
    FOR ALL
    TO service_role
    USING (true);

-- 添加表注释
COMMENT ON TABLE "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions" IS '邮件订阅表，存储用户邮件订阅信息';
COMMENT ON TABLE "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions" IS '联系信息提交表，存储用户通过联系表单提交的信息';

-- 添加列注释
COMMENT ON COLUMN "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions".email IS '订阅邮箱地址，必须唯一';
COMMENT ON COLUMN "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions".is_active IS '订阅状态，true为活跃，false为已取消订阅';
COMMENT ON COLUMN "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions".full_name IS '联系人姓名';
COMMENT ON COLUMN "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions".subject IS '联系主题';
COMMENT ON COLUMN "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions".message IS '联系信息详细内容';
COMMENT ON COLUMN "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions".is_read IS '是否已读，用于管理端查看状态';

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions"(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at 
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions"(subscribed_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at 
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"(submitted_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read 
    ON "public"."b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions"(is_read);