import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string | undefined;
    name: string | undefined | null;
    email: string | undefined | null;
    image?: string;
    username: string;
    sub: string;
    role?: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      username: string;
      role?: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    username: string;
    role?: string;
  }
}
