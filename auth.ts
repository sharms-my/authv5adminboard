import NextAuth, { CredentialsSignin, DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    //Google,
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/auth",
    signOut: "/auth",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.name = token?.username;
        session.user.username = token?.username;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      // if (account?.provider === "google") {
      //   try {
      //     const { email, name, image, id } = user;
      //     await connectDB();
      //     const alreadyUser = await User.findOne({ email });

      //     if (!alreadyUser) {
      //       await User.create({ email, name, image, authProviderId: id });
      //     } else {
      //       return true;
      //     }
      //   } catch (error) {
      //     throw new Error("Error while creating user");
      //   }
      // }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
});
