import HomeContent from "@/components/HomeContent";
import { GroupProvider } from "@/contexts/GroupContext";
import InitUser from "@/lib/store/initUser";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();

  if (error) {
  }

  return (
    <div className="bg-[#F3F3F3] ">
      <GroupProvider>
        <HomeContent />
      </GroupProvider>
      <InitUser user={data.user || undefined} />
    </div>
  );
}
