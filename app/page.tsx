import GroupNavigation from "./_components/group-navigation";
import MobileGroupNavigation from "./_components/mobile-group-navigation";
import GroupMessage from "./_components/group-message";
import { GroupProvider } from "@/contexts/GroupContext";

export default function Home() {
  return (
    <div className="bg-[#F3F3F3]">
      <GroupProvider>
        <div>
          <div className="hidden lg:block">
            <GroupNavigation />
          </div>
          <MobileGroupNavigation />
        </div>

        <div>
          <GroupMessage />
        </div>
      </GroupProvider>
    </div>
  );
}
