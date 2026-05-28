import Main from "@/app/_components/Main";
import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <Main>
      <div class="grid grid-cols-[16rem_1fr] flex-col flex-1 w-full min-h-0 h-[calc(100vh-11rem)] overflow-hidden gap-12">
        <div class="h-full overflow-hidden">
          <SideNavigation />
        </div>

        <div class="h-full overflow-y-auto">{children}</div>
      </div>
    </Main>
  );
}
