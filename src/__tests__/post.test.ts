import { Post } from '../db/models/post.model';
import * as postService from '../service/post.service';
import { PostObject, PostEntity } from '../utils/POJO/post';
import { PostModel } from './POJO/postTest';

let postObject: PostObject;
let postEntity: PostEntity;
let postModel: PostModel;

let postModelCreate: jest.SpyInstance;

beforeAll(() => {
  postObject = {
    description: 'Post from test',
    imagePath: '/path/post1.png',
    addedByUserId: 159,
  };
  postEntity = {
    id: 1,
    likeCount: 0,
    dislikeCount: 0,
    datetimeCreated: '2023-02-22 15:16:40',
    ...postObject,
  };
  postModel = {
    dataValues: {
      ...postEntity,
    },
  };

  //Mocks
  postModelCreate = jest.spyOn(Post, 'create');
  postModelCreate.mockImplementation(() => Promise.resolve(postModel));
});

describe('Register a post', () => {
  test('it should create a new post', async () => {
    const result = await postService.registerPost(postObject);
    expect(result.isOk).toBe(true);
    expect(result.message).toBe('Post created successfully');
    expect(result?.data?.id).toBe(1);
    expect(result?.data?.description).toBe('Post from test');
    expect(postModelCreate).toHaveBeenCalledWith(postObject);
  });
});
