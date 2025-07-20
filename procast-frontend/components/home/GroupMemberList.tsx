import { useUser } from "@/lib/stores/user";
import FriendItem from "../FriendItem";
import { Skeleton } from "../ui/skeleton";

type Member = {
  id: number;
  name: string;
  role: string;
  avatar?: string;
};

type Members = Member[];

export default function GroupMemberList({
  members,
  loading,
}: {
  members: Members;
  loading: boolean;
}) {
  const profile = useUser((state) => state.profile);
  console.log(profile);

  const roles = (key: number) => {
    const result = [];

    if (
      profile?.data.id === members[key]?.id &&
      members[key]?.role === "admin"
    ) {
      result.push("kick");
    }

    return result;
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-3 p-4 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
        <Skeleton className="w-full h-14" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg h-[320px] scroll-y overflow-y-scroll">
      {members.length !== 0 ? (
        <>
          {members.map((member, key) => (
            <FriendItem key={key} type={roles(key)} member={member} />
          ))}
        </>
      ) : (
        <p className="text-zinc-400">No members found.</p>
      )}
    </div>
  );
}
