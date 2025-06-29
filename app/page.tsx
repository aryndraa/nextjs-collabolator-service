import { GroupProvider } from "@/contexts/GroupContext";
import GroupNavigation from "@/components/GroupNavigation";
import MobileGroupNavigation from "@/components/MobileGroupNavigation";
import GroupMessage from "@/components/GroupMessage";
import GroupBar from "@/components/GroupBar";
import DefaultScreen from "@/components/DefaultScreen";

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

          <div className="bg-[#F3F3F3] w-full lg:m-4 hidden gap-4 hid ">
            <GroupMessage />
            <GroupBar />
          </div>

          <div className="w-full">
            <DefaultScreen />
          </div>
        </div>
      </GroupProvider>
    </div>
  );
}
