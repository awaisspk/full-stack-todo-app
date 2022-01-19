import {prisma} from '@lib/prisma';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getToken} from 'next-auth/jwt';
import {getSession} from 'next-auth/react';

type Data =
  | {
      id: String;
      content: String;
      completed: Boolean;
    }
  | {error: string};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({req});
  const token = await getToken({req, secret: process.env.SECRET});

  const {id} = req.query;
  const {completed} = req.body;

  if (session) {
    try {
      const todo = await prisma.todo.update({
        data: {
          completed,
          userId: token?.sub,
        },
        where: {
          // @ts-ignore
          id: id,
        },
      });
      res.status(200);
      return res.json(todo);
    } catch (error) {
      res.status(401);
      res.json({error: 'User already exists'});
    }
  }
};

export default handler;
