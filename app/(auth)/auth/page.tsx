import AuthTabs from "@/components/auth/AuthTabs";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";

const AuthPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <>
      <AuthTabs />
    </>
  );
};

export default AuthPage;
