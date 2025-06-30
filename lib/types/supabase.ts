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
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Friend: {
        Row: {
          createdAt: string
          id: number
          receiverId: number
          senderId: number
          status: Database["public"]["Enums"]["FriendStatus"]
        }
        Insert: {
          createdAt?: string
          id?: number
          receiverId: number
          senderId: number
          status?: Database["public"]["Enums"]["FriendStatus"]
        }
        Update: {
          createdAt?: string
          id?: number
          receiverId?: number
          senderId?: number
          status?: Database["public"]["Enums"]["FriendStatus"]
        }
        Relationships: [
          {
            foreignKeyName: "Friend_receiverId_fkey"
            columns: ["receiverId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Friend_senderId_fkey"
            columns: ["senderId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Group: {
        Row: {
          createdAt: string
          deadlineProject: string
          description: string | null
          id: number
          name: string
        }
        Insert: {
          createdAt?: string
          deadlineProject: string
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          createdAt?: string
          deadlineProject?: string
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      GroupParticipant: {
        Row: {
          createdAt: string
          groupId: number
          id: number
          role: Database["public"]["Enums"]["Role"]
          userId: number
        }
        Insert: {
          createdAt?: string
          groupId: number
          id?: number
          role?: Database["public"]["Enums"]["Role"]
          userId: number
        }
        Update: {
          createdAt?: string
          groupId?: number
          id?: number
          role?: Database["public"]["Enums"]["Role"]
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "GroupParticipant_groupId_fkey"
            columns: ["groupId"]
            isOneToOne: false
            referencedRelation: "Group"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "GroupParticipant_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Message: {
        Row: {
          createdAt: string
          fileSize: number | null
          fileType: string | null
          fileUrl: string | null
          id: number
          text: string | null
          type: Database["public"]["Enums"]["Type"]
          userId: number
        }
        Insert: {
          createdAt?: string
          fileSize?: number | null
          fileType?: string | null
          fileUrl?: string | null
          id?: number
          text?: string | null
          type?: Database["public"]["Enums"]["Type"]
          userId: number
        }
        Update: {
          createdAt?: string
          fileSize?: number | null
          fileType?: string | null
          fileUrl?: string | null
          id?: number
          text?: string | null
          type?: Database["public"]["Enums"]["Type"]
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "Message_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      MessageRecipient: {
        Row: {
          groupId: number
          id: number
          isEdit: boolean
          isPin: boolean
          messageId: number
          replyToId: number | null
        }
        Insert: {
          groupId: number
          id?: number
          isEdit: boolean
          isPin: boolean
          messageId: number
          replyToId?: number | null
        }
        Update: {
          groupId?: number
          id?: number
          isEdit?: boolean
          isPin?: boolean
          messageId?: number
          replyToId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "MessageRecipient_groupId_fkey"
            columns: ["groupId"]
            isOneToOne: false
            referencedRelation: "Group"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "MessageRecipient_messageId_fkey"
            columns: ["messageId"]
            isOneToOne: false
            referencedRelation: "Message"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "MessageRecipient_replyToId_fkey"
            columns: ["replyToId"]
            isOneToOne: false
            referencedRelation: "Message"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          authUserId: string | null
          avatarUrl: string | null
          createdAt: string
          displayName: string
          id: number
        }
        Insert: {
          authUserId?: string | null
          avatarUrl?: string | null
          createdAt?: string
          displayName: string
          id?: number
        }
        Update: {
          authUserId?: string | null
          avatarUrl?: string | null
          createdAt?: string
          displayName?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      FriendStatus: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED"
      Role: "MEMBER" | "ADMIN"
      Type: "TEXT" | "IMAGE" | "FILE" | "LINK"
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
      FriendStatus: ["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"],
      Role: ["MEMBER", "ADMIN"],
      Type: ["TEXT", "IMAGE", "FILE", "LINK"],
    },
  },
} as const
