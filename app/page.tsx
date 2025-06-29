import HomeContent from "@/components/HomeContent";
import { GroupProvider } from "@/contexts/GroupContext";

export default function Home() {
  return (
    <div className="bg-[#F3F3F3] ">
      <GroupProvider>
        <HomeContent />
      </GroupProvider>
    </div>
  );
}
