export type Database = {
  public: {
    Tables: {
      "b0b237ee-54c0-4581-9b81-d9e7327dfe6c_newsletter_subscriptions": {
        Row: {
          id: string;
          user_id: string;
          email: string;
          subscribed_at: string | null;
          is_active: boolean | null;
        };
        Insert: {
          id?: string;
          user_id?: string;
          email: string;
          subscribed_at?: string | null;
          is_active?: boolean | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          email?: string;
          subscribed_at?: string | null;
          is_active?: boolean | null;
        };
      };
      "b0b237ee-54c0-4581-9b81-d9e7327dfe6c_contact_submissions": {
        Row: {
          id: string;
          user_id: string;
          full_name: string;
          email: string;
          subject: string;
          message: string | null;
          submitted_at: string | null;
          status: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string;
          full_name: string;
          email: string;
          subject: string;
          message?: string | null;
          submitted_at?: string | null;
          status?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          full_name?: string;
          email?: string;
          subject?: string;
          message?: string | null;
          submitted_at?: string | null;
          status?: string | null;
        };
      };
    };
  };
};