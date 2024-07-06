import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/auth/Navbar";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();
  const user = session?.user;
  if (!user) return redirect("/auth");
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-slate-200 dark:bg-slate-900">
        <div className="absolute min-h-[300px] w-full bg-gradient-to-b from-[--theme-accent] to-transparent z-0"></div>

        <Sidebar />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar />
          <div className="p-5 z-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
