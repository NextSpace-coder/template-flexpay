import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { ContactSubmissionInsert } from '@/integrations/supabase/types';
import { toast } from '@/hooks/use-toast';

interface ContactSubmissionData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const submitContactForm = async (data: ContactSubmissionData): Promise<void> => {
  const submissionData: ContactSubmissionInsert = {
    full_name: data.fullName,
    email: data.email,
    subject: data.subject,
    message: data.message || null,
    user_id: null // 匿名用户
  };

  const { error } = await supabase
    .from('b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions')
    .insert(submissionData);

  if (error) {
    console.error('Contact form submission error:', error);
    throw new Error(error.message);
  }
};

export const useContactSubmit = () => {
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast({
        title: "消息发送成功！",
        description: "我们已收到您的消息，将尽快与您联系。",
      });
    },
    onError: (error: Error) => {
      console.error('Contact form submission failed:', error);
      toast({
        title: "发送失败",
        description: "消息发送过程中出现错误，请稍后重试。",
        variant: "destructive",
      });
    },
  });
}; 