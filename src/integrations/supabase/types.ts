export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_audit_log: {
        Row: {
          action_type: string
          admin_id: string
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          ip_address: string | null
          new_value: Json | null
          old_value: Json | null
          reason: string | null
        }
        Insert: {
          action_type: string
          admin_id: string
          created_at?: string
          entity_id: string
          entity_type: string
          id?: string
          ip_address?: string | null
          new_value?: Json | null
          old_value?: Json | null
          reason?: string | null
        }
        Update: {
          action_type?: string
          admin_id?: string
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          ip_address?: string | null
          new_value?: Json | null
          old_value?: Json | null
          reason?: string | null
        }
        Relationships: []
      }
      customer_locations: {
        Row: {
          address_line1: string
          address_line2: string | null
          city: string
          country_code: string
          country_name: string
          created_at: string
          currency_code: string
          customer_id: string
          id: string
          is_default: boolean | null
          latitude: number | null
          longitude: number | null
          name: string
          phone: string | null
          postal_code: string
          state: string
          updated_at: string
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          city: string
          country_code: string
          country_name: string
          created_at?: string
          currency_code?: string
          customer_id: string
          id?: string
          is_default?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name: string
          phone?: string | null
          postal_code: string
          state: string
          updated_at?: string
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          city?: string
          country_code?: string
          country_name?: string
          created_at?: string
          currency_code?: string
          customer_id?: string
          id?: string
          is_default?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name?: string
          phone?: string | null
          postal_code?: string
          state?: string
          updated_at?: string
        }
        Relationships: []
      }
      customer_preferences: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          selected_location_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          selected_location_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          selected_location_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_preferences_selected_location_id_fkey"
            columns: ["selected_location_id"]
            isOneToOne: false
            referencedRelation: "customer_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      disputes: {
        Row: {
          admin_notes: string | null
          created_at: string
          customer_id: string
          description: string
          id: string
          order_id: string
          resolution: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string | null
          title: string
          updated_at: string
          vendor_id: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          customer_id: string
          description: string
          id?: string
          order_id: string
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string | null
          title: string
          updated_at?: string
          vendor_id: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          customer_id?: string
          description?: string
          id?: string
          order_id?: string
          resolution?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "disputes_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      early_access_signups: {
        Row: {
          country: string
          created_at: string
          email: string
          id: string
          interested_services: string[] | null
          name: string
          referral_source: string | null
          use_case: string | null
        }
        Insert: {
          country: string
          created_at?: string
          email: string
          id?: string
          interested_services?: string[] | null
          name: string
          referral_source?: string | null
          use_case?: string | null
        }
        Update: {
          country?: string
          created_at?: string
          email?: string
          id?: string
          interested_services?: string[] | null
          name?: string
          referral_source?: string | null
          use_case?: string | null
        }
        Relationships: []
      }
      order_chat_messages: {
        Row: {
          created_at: string
          id: string
          is_system_message: boolean | null
          message: string
          order_id: string
          read_at: string | null
          sender_id: string
          sender_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_system_message?: boolean | null
          message: string
          order_id: string
          read_at?: string | null
          sender_id: string
          sender_type: string
        }
        Update: {
          created_at?: string
          id?: string
          is_system_message?: boolean | null
          message?: string
          order_id?: string
          read_at?: string | null
          sender_id?: string
          sender_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_chat_messages_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string
          product_id: string
          quantity: number
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          id?: string
          order_id: string
          product_id: string
          quantity: number
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: Json | null
          created_at: string
          currency: string | null
          customer_id: string | null
          id: string
          notes: string | null
          order_number: string
          shipping_address: Json | null
          status: string | null
          total_amount: number
          updated_at: string
          vendor_id: string
        }
        Insert: {
          billing_address?: Json | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          shipping_address?: Json | null
          status?: string | null
          total_amount: number
          updated_at?: string
          vendor_id: string
        }
        Update: {
          billing_address?: Json | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          shipping_address?: Json | null
          status?: string | null
          total_amount?: number
          updated_at?: string
          vendor_id?: string
        }
        Relationships: []
      }
      partner_applications: {
        Row: {
          business_name: string
          business_type: string | null
          contact_name: string
          country: string
          created_at: string
          description: string | null
          email: string
          experience_years: number | null
          id: string
          phone: string | null
          services_offered: string[] | null
          status: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          business_name: string
          business_type?: string | null
          contact_name: string
          country: string
          created_at?: string
          description?: string | null
          email: string
          experience_years?: number | null
          id?: string
          phone?: string | null
          services_offered?: string[] | null
          status?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          business_name?: string
          business_type?: string | null
          contact_name?: string
          country?: string
          created_at?: string
          description?: string | null
          email?: string
          experience_years?: number | null
          id?: string
          phone?: string | null
          services_offered?: string[] | null
          status?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      platform_settings: {
        Row: {
          description: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          base_currency: string | null
          category: string | null
          country_specific_pricing: Json | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
          price: number
          sku: string | null
          stock_quantity: number | null
          updated_at: string
          vendor_id: string
        }
        Insert: {
          base_currency?: string | null
          category?: string | null
          country_specific_pricing?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
          price: number
          sku?: string | null
          stock_quantity?: number | null
          updated_at?: string
          vendor_id: string
        }
        Update: {
          base_currency?: string | null
          category?: string | null
          country_specific_pricing?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          price?: number
          sku?: string | null
          stock_quantity?: number | null
          updated_at?: string
          vendor_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      refunds: {
        Row: {
          admin_id: string
          admin_notes: string | null
          amount: number
          created_at: string
          dispute_id: string | null
          id: string
          order_id: string
          processed_at: string | null
          reason: string
          status: string | null
        }
        Insert: {
          admin_id: string
          admin_notes?: string | null
          amount: number
          created_at?: string
          dispute_id?: string | null
          id?: string
          order_id: string
          processed_at?: string | null
          reason: string
          status?: string | null
        }
        Update: {
          admin_id?: string
          admin_notes?: string | null
          amount?: number
          created_at?: string
          dispute_id?: string | null
          id?: string
          order_id?: string
          processed_at?: string | null
          reason?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "refunds_dispute_id_fkey"
            columns: ["dispute_id"]
            isOneToOne: false
            referencedRelation: "disputes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refunds_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vendor_messages: {
        Row: {
          conversation_id: string
          created_at: string
          id: string
          message: string
          read_at: string | null
          recipient_id: string
          sender_id: string
        }
        Insert: {
          conversation_id: string
          created_at?: string
          id?: string
          message: string
          read_at?: string | null
          recipient_id: string
          sender_id: string
        }
        Update: {
          conversation_id?: string
          created_at?: string
          id?: string
          message?: string
          read_at?: string | null
          recipient_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      vendor_profiles: {
        Row: {
          business_address: string | null
          business_name: string | null
          business_type: string | null
          country: string | null
          created_at: string
          currency_code: string | null
          detailed_category:
            | Database["public"]["Enums"]["business_category"]
            | null
          full_address: string | null
          id: string
          latitude: number | null
          longitude: number | null
          phone_number: string | null
          tax_id: string | null
          timezone: string | null
          updated_at: string
          user_id: string
          verification_status: string | null
        }
        Insert: {
          business_address?: string | null
          business_name?: string | null
          business_type?: string | null
          country?: string | null
          created_at?: string
          currency_code?: string | null
          detailed_category?:
            | Database["public"]["Enums"]["business_category"]
            | null
          full_address?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          phone_number?: string | null
          tax_id?: string | null
          timezone?: string | null
          updated_at?: string
          user_id: string
          verification_status?: string | null
        }
        Update: {
          business_address?: string | null
          business_name?: string | null
          business_type?: string | null
          country?: string | null
          created_at?: string
          currency_code?: string | null
          detailed_category?:
            | Database["public"]["Enums"]["business_category"]
            | null
          full_address?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          phone_number?: string | null
          tax_id?: string | null
          timezone?: string | null
          updated_at?: string
          user_id?: string
          verification_status?: string | null
        }
        Relationships: []
      }
      waitlist_signups: {
        Row: {
          country: string
          created_at: string
          email: string
          id: string
          name: string
          notification_preferences: Json | null
        }
        Insert: {
          country: string
          created_at?: string
          email: string
          id?: string
          name: string
          notification_preferences?: Json | null
        }
        Update: {
          country?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          notification_preferences?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      vendor_search: {
        Row: {
          avatar_url: string | null
          avg_rating: number | null
          business_name: string | null
          business_type: string | null
          contact_name: string | null
          country: string | null
          created_at: string | null
          detailed_category:
            | Database["public"]["Enums"]["business_category"]
            | null
          id: string | null
          product_count: number | null
          user_id: string | null
          verification_status: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_distance_miles: {
        Args: { lat1: number; lon1: number; lat2: number; lon2: number }
        Returns: number
      }
      cube: {
        Args: { "": number[] } | { "": number }
        Returns: unknown
      }
      cube_dim: {
        Args: { "": unknown }
        Returns: number
      }
      cube_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      cube_is_point: {
        Args: { "": unknown }
        Returns: boolean
      }
      cube_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      cube_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      cube_send: {
        Args: { "": unknown }
        Returns: string
      }
      cube_size: {
        Args: { "": unknown }
        Returns: number
      }
      earth: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      gc_to_sec: {
        Args: { "": number }
        Returns: number
      }
      is_admin: {
        Args: { _user_id: string }
        Returns: boolean
      }
      latitude: {
        Args: { "": unknown }
        Returns: number
      }
      longitude: {
        Args: { "": unknown }
        Returns: number
      }
      sec_to_gc: {
        Args: { "": number }
        Returns: number
      }
    }
    Enums: {
      app_role: "vendor" | "customer" | "admin"
      business_category:
        | "restaurant_fast_food"
        | "restaurant_fine_dining"
        | "restaurant_casual_dining"
        | "restaurant_cafe"
        | "grocery_supermarket"
        | "grocery_organic"
        | "grocery_specialty"
        | "grocery_convenience"
        | "service_delivery"
        | "service_cleaning"
        | "service_maintenance"
        | "service_healthcare"
        | "service_beauty"
        | "service_tutoring"
        | "service_pet_care"
        | "service_transportation"
        | "retail_clothing"
        | "retail_electronics"
        | "retail_books"
        | "retail_pharmacy"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["vendor", "customer", "admin"],
      business_category: [
        "restaurant_fast_food",
        "restaurant_fine_dining",
        "restaurant_casual_dining",
        "restaurant_cafe",
        "grocery_supermarket",
        "grocery_organic",
        "grocery_specialty",
        "grocery_convenience",
        "service_delivery",
        "service_cleaning",
        "service_maintenance",
        "service_healthcare",
        "service_beauty",
        "service_tutoring",
        "service_pet_care",
        "service_transportation",
        "retail_clothing",
        "retail_electronics",
        "retail_books",
        "retail_pharmacy",
        "other",
      ],
    },
  },
} as const
