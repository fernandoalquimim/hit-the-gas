import Main from "@/app/_components/Main";
import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <Main>
      <div className="grid max-[31.25rem]:grid-cols-1 grid-cols-[4rem_1fr] lg:grid-cols-[16rem_1fr] flex-col flex-1 w-full min-h-0 min-[31.25rem]:h-[calc(100vh-11rem)] overflow-hidden gap-10 transition-all duration-300">
        <div className="min-[31.25rem]:h-full min-[31.25rem]:overflow-hidden">
          <SideNavigation />
        </div>

        <div className="h-full overflow-y-auto scrollbar-track-transparent scrollbar-thumb-primary-900 min-[31.25rem]:pr-6">
          {children}
        </div>
      </div>
    </Main>
  );
}
