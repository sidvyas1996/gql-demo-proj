import { getSession } from '@auth0/nextjs-auth0';
import { Request, Response } from 'express';

export async function createContext({ req, res }: { req: Request, res: Response }) {
  const session = await getSession({ req },{res}) ;

  // if the user is not logged in, return null
  if (!session || typeof session === 'undefined') return {};

  const { user, accessToken } = session;

  return {
    user,
    accessToken,
  };
}