import GroupNavigation from "./_components/group-navigation";
import MobileGroupNavigation from "./_components/mobile-group-navigation";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <GroupNavigation />
      </div>
      <MobileGroupNavigation />
    </div>
  );
}
