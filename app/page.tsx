import { GroupProvider } from "@/contexts/GroupContext";
import GroupNavigation from "@/components/GroupNavigation";
import MobileGroupNavigation from "@/components/MobileGroupNavigation";
import GroupMessage from "@/components/GroupMessage";
import GroupBar from "@/components/GroupBar";

export default function Home() {
  return (
    <div className="bg-[#F3F3F3] ">
      <GroupProvider>
        <div className="flex">
          <div>
            <div className="hidden lg:block">
              <GroupNavigation />
            </div>
            <MobileGroupNavigation />
          </div>

          <div className="bg-[#F3F3F3] w-full lg:m-4 flex gap-4 ">
            <GroupMessage />
            <GroupBar />
          </div>
        </div>
      </GroupProvider>
    </div>
  );
}
