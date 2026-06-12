import Main from "@/app/_components/Main";
import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <Main>
      <div className="grid grid-cols-[16rem_1fr] flex-col flex-1 w-full min-h-0 h-[calc(100vh-11rem)] overflow-hidden gap-10">
        <div className="h-full overflow-hidden">
          <SideNavigation />
        </div>

        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-900 pr-6">
          {children}
        </div>
      </div>
    </Main>
  );
}
