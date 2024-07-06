import { getSession } from "@/lib/getSession";
import { fetchAllUsers } from "@/action/user";
import { redirect } from "next/navigation";

export async function fetchSettingsData() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/auth");
    return { session: null, allUsers: null };
  }

  if (user?.role !== "admin") {
    redirect("/");
    return { session: null, allUsers: null };
  }

  const allUsers = await fetchAllUsers();
  // Serialize user data to plain objects
  const plainUsers = allUsers.map((user) => ({
    _id: user._id.toString(),
    username: user.username,
  }));
  return { session, allUsers: plainUsers };
}
