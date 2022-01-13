import NextAuth from 'next-auth';
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import {prisma} from '@lib/prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // @ts-ignore
      scope: 'read:user',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.SECRET,
  },

  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {},

  events: {},
  debug: false,
});
