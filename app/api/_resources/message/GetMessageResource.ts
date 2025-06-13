import { Message, MessageRecipient, User } from "@/lib/generated/prisma";
import { formatDistanceToNow } from "date-fns";

type recipientWithMessageAndUser = MessageRecipient & {
  message: Message & {
    user: User;
  };
};

export class GetMessageResource {
  static toJson(message: recipientWithMessageAndUser) {
    return {
      id: message.id,
      groupId: message.groupId,
      isEdit: message.isEdit,
      isPin: message.isPin,
      user: {
        id: message.message.user.id,
        name: message.message.user.displayName,
        avatar: message.message.user.avatarUrl,
      },
      message: {
        id: message.message.id,
        text: message.message.text,
        type: message.message.type,
        fileType: message.message.fileType,
        fileSize: message.message.fileSize,
        fileUrl: message.message.fileUrl,
        createdAt: formatDistanceToNow(new Date(message.message.createdAt), {
          addSuffix: true,
        }).replace(/^about\s/, ""),
      },
    };
  }

  static collection(messages: recipientWithMessageAndUser[]) {
    return messages.map(this.toJson);
  }
}
