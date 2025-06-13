import { Friend, User } from "@/lib/generated/prisma";

type FriendWithSenderAndReceiver = Friend & {
  sender: User;
  receiver: User;
};

export class GetFriendResource {
  static toJson(friend: FriendWithSenderAndReceiver, currentUserId: number) {
    const isReceiver = friend.receiverId === currentUserId;
    const otherUser = isReceiver ? friend.sender : friend.receiver;

    return {
      id: friend.id,
      status: friend.status,
      user: {
        id: otherUser.id,
        displayName: otherUser.displayName,
        avatarUrl: otherUser.avatarUrl,
        createdAt: otherUser.createdAt,
      },
    };
  }

  static collection(
    friends: FriendWithSenderAndReceiver[],
    currentUserId: number
  ) {
    return friends.map((friend) => this.toJson(friend, currentUserId));
  }
}
