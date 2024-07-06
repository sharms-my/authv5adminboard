import { auth } from "@/auth";
import { cache } from "react";

export const getSession = async () => {
  const session = await auth();
  return session;
};

// export const getSession = cache(async () => {
//   const session = await auth();
//   return session;
// });
