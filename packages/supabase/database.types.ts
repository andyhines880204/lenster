export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      channels: {
        Row: {
          avatar: string;
          cover: string | null;
          created_at: string;
          description: string;
          discord: string | null;
          featured: boolean;
          id: string;
          instagram: string | null;
          lens: string | null;
          name: string;
          slug: string;
          tags: string[] | null;
          x: string | null;
        };
        Insert: {
          avatar: string;
          cover?: string | null;
          created_at?: string;
          description: string;
          discord?: string | null;
          featured?: boolean;
          id?: string;
          instagram?: string | null;
          lens?: string | null;
          name: string;
          slug: string;
          tags?: string[] | null;
          x?: string | null;
        };
        Update: {
          avatar?: string;
          cover?: string | null;
          created_at?: string;
          description?: string;
          discord?: string | null;
          featured?: boolean;
          id?: string;
          instagram?: string | null;
          lens?: string | null;
          name?: string;
          slug?: string;
          tags?: string[] | null;
          x?: string | null;
        };
        Relationships: [];
      };
      rights: {
        Row: {
          gardener_mode: boolean;
          high_signal_notification_filter: boolean;
          id: string;
          is_gardener: boolean;
          is_lens_member: boolean;
          is_pride: boolean;
          is_staff: boolean;
          is_verified: boolean;
          staff_mode: boolean;
        };
        Insert: {
          gardener_mode?: boolean;
          high_signal_notification_filter?: boolean;
          id: string;
          is_gardener?: boolean;
          is_lens_member?: boolean;
          is_pride?: boolean;
          is_staff?: boolean;
          is_verified?: boolean;
          staff_mode?: boolean;
        };
        Update: {
          gardener_mode?: boolean;
          high_signal_notification_filter?: boolean;
          id?: string;
          is_gardener?: boolean;
          is_lens_member?: boolean;
          is_pride?: boolean;
          is_staff?: boolean;
          is_verified?: boolean;
          staff_mode?: boolean;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      community_state: 'Accepted' | 'Pending' | 'Rejected' | 'Suspended';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
