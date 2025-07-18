import { login } from "@/lib/supabase/auth/service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await login({ email });
        // console.log({ iniUser: user });
        const passwordMatch = await bcrypt.compare(
          password,
          user.password_hash
        );
        if (passwordMatch) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // GENERATE JWT
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.username = user.username;
        token.id = user.id;
      }

      // console.log({ inijwt: token });

      return token;
    },

    //GENERATE SESSION
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("username" in token) {
        session.user.name = token.username;
      }
      if ("id" in token) {
        session.user.id = token.id;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
