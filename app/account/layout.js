import Main from "@/app/_components/Main";
import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <Main>
      <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
        <SideNavigation />
        <div className="flex flex-col">{children}</div>
      </div>
    </Main>
  );
}
