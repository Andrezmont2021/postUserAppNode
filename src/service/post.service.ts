import { Post } from '../db/models/post.model';
import { PostEntity, PostObject, ResponseCreate } from '../utils/POJO/post';
import { CustomError } from '../utils/custom-error.model';

export const registerPost = async (
  data: PostObject
): Promise<ResponseCreate> => {
  try {
    const result = await Post.create(data);
    return {
      isOk: true,
      message: 'Post created successfully',
      data: result.dataValues as PostEntity,
    };
  } catch (error: any) {
    throw new CustomError(
      'Error when try to create a post',
      500,
      error?.original?.sqlMessage || error.message
    );
  }
};
