import {prisma} from '@lib/prisma';
import type {NextApiRequest, NextApiResponse} from 'next';
import {getToken} from 'next-auth/jwt';
import {getSession} from 'next-auth/react';

type Data =
  | {
      id: String;
      content: String;
      completed: Boolean;
    }[]
  | {error: string};

type ReqType = {
  completed?: boolean;
  delete?: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({req});
  const token = await getToken({req, secret: process.env.SECRET});

  const {id} = req.query;

  const todo: ReqType = req.body;

  if (session) {
    try {
      if (todo.completed) {
        await prisma.todo.update({
          data: {
            completed: todo.completed,
            userId: token?.sub,
          },
          where: {
            // @ts-ignore
            id: id,
          },
        });
      } else if (todo.delete) {
        await prisma.todo.delete({
          where: {
            // @ts-ignore
            id,
          },
        });
      }

      const todos = await prisma.todo.findMany({
        where: {
          userId: token?.sub,
        },
      });

      res.status(200);
      res.json(todos);
    } catch (error) {
      res.status(401);
      res.json({error: 'User already exists'});
    }
  }
};

export default handler;
