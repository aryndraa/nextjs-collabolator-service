import { GroupParticipant, User } from "@/lib/generated/prisma";

type GroupParticipantWithUser = GroupParticipant & {
  user: User;
};

export class GetParticipantResource {
  static toJson(participant: GroupParticipantWithUser) {
    return {
      role: participant.role,
      user: {
        id: participant.user.id,
        name: participant.user.displayName,
        avatar: participant.user.avatarUrl,
      },
    };
  }

  static collection(participant: GroupParticipantWithUser[]) {
    return participant.map(this.toJson);
  }
}
