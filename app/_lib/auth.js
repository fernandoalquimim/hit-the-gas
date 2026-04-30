import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createClient, getClient } from "./data-services";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingClient = await getClient(user.email);

        if (!existingClient)
          await createClient({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
