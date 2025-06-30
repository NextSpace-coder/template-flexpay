export interface Database {
  public: {
    Tables: {
      [`b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions`]: {
        Row: {
          id: number;
          email: string;
          subscribed_at: string;
          is_active: boolean;
          user_id: string | null;
        };
        Insert: {
          id?: number;
          email: string;
          subscribed_at?: string;
          is_active?: boolean;
          user_id?: string | null;
        };
        Update: {
          id?: number;
          email?: string;
          subscribed_at?: string;
          is_active?: boolean;
          user_id?: string | null;
        };
      };
      [`b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions`]: {
        Row: {
          id: number;
          full_name: string;
          email: string;
          subject: string;
          message: string | null;
          submitted_at: string;
          user_id: string | null;
        };
        Insert: {
          id?: number;
          full_name: string;
          email: string;
          subject: string;
          message?: string | null;
          submitted_at?: string;
          user_id?: string | null;
        };
        Update: {
          id?: number;
          full_name?: string;
          email?: string;
          subject?: string;
          message?: string | null;
          submitted_at?: string;
          user_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

// 便于使用的类型别名
export type NewsletterSubscription = Database['public']['Tables']['b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions']['Row'];
export type NewsletterSubscriptionInsert = Database['public']['Tables']['b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions']['Insert'];

export type ContactSubmission = Database['public']['Tables']['b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions']['Row'];
export type ContactSubmissionInsert = Database['public']['Tables']['b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions']['Insert']; 