
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import { db } from '@/db/drizzle'


export const authConfig: NextAuthOptions = {
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? ' ',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ' ',
      }),
    ],
  }

const handler = NextAuth(authConfig)


export { handler as GET, handler as POST };

