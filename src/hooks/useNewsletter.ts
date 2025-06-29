import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { NewsletterSubscriptionInsert } from '@/integrations/supabase/types';
import { toast } from '@/hooks/use-toast';

interface NewsletterSubscribeData {
  email: string;
}

const subscribeToNewsletter = async (data: NewsletterSubscribeData): Promise<void> => {
  const subscriptionData: NewsletterSubscriptionInsert = {
    email: data.email,
    is_active: true,
    user_id: null // 匿名用户
  };

  const { error } = await supabase
    .from('b0b237ee_54c0_4581_9b81_d9e7327dfe6c_newsletter_subscriptions')
    .insert(subscriptionData);

  if (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error(error.message);
  }
};

export const useNewsletterSubscribe = () => {
  return useMutation({
    mutationFn: subscribeToNewsletter,
    onSuccess: () => {
      toast({
        title: "订阅成功！",
        description: "感谢您订阅我们的邮件列表，您将收到最新的内容更新。",
      });
    },
    onError: (error: Error) => {
      console.error('Newsletter subscription failed:', error);
      toast({
        title: "订阅失败",
        description: error.message.includes('duplicate') 
          ? "此邮箱已经订阅过了。" 
          : "订阅过程中出现错误，请稍后重试。",
        variant: "destructive",
      });
    },
  });
}; 