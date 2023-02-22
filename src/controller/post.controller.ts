import { NextFunction, Request, Response } from 'express';
import * as postService from '../service/post.service';
import { PostObject } from '../utils/POJO/post';

export const registerPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: PostObject = {
      description: req.body.description,
      imagePath: req.body.imagePath,
      addedByUserId: req.body.addedByUserId,
    };
    const result = await postService.registerPost(data);
    if (result && result.isOk) {
      res.send({
        message: result.message,
        data: result.data,
      });
    } else {
      if (result.message) {
        res.status(400).send({ message: result.message });
      } else {
        res.status(500).send({ message: 'Error when try to register a post' });
      }
    }
  } catch (error) {
    next(error);
  }
};
