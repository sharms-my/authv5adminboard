import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Navbar = async () => {
  const session = await getSession();
  const today: Date = new Date();

  // Format the date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate: string = today.toLocaleDateString(undefined, options);

  return (
    <nav className="pt-5 px-5 flex justify-between z-10">
      <div className="hidden md:inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {session?.user ? (
          <div className="flex items-center">
            <div className="grid gap-0">
              <div className="text-xl text-white font-bold leading-none">
                Hi {session.user.name}!
                <Badge
                  className="ml-2 text-slate-200 align-top"
                  variant="outline"
                >
                  {session.user.role}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground italic">
                &gt;&gt;{formattedDate}
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="ml-auto md:flex items-center">
        {!session?.user ? (
          <>
            <ul className="hidden md:flex space-x-1 md:space-x-2 list-none">
              <li>
                <Link href="/auth" className="hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth" className="hover:text-gray-400">
                  Register
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button
                type="submit"
                className="border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </form>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
