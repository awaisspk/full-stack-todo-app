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
  const {content, id, completed} = req.body;
  const session = await getSession({req});
  const token = await getToken({req, secret: process.env.SECRET});
  let todo: Data;
  if (session) {
    todo = await prisma.todo.create({
      data: {
        content,
        completed,
        id,
        userId: token?.sub,
      },
    });

    res.status(200);
    return res.json(todo);
  }
  res.status(404);
  res.json({error: 'Unable to create todo'});
};

export default handler;
