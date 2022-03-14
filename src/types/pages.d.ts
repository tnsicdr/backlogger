import type { NextPage } from 'next';

export type NextAuthPage<P = {}, IP = P> = NextPage<P, IP> & {
  provider
}