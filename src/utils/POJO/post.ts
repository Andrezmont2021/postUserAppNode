export interface PostObject {
  description: string;
  imagePath: string;
  addedByUserId: number;
}

export interface PostEntity {
  id: number;
  description: string;
  imagePath: string;
  likeCount: number;
  dislikeCount: number;
  datetimeCreated: string;
  addedByUserId: number;
}

export interface ResponseCreate {
  isOk: boolean,
  message: string,
  data: PostEntity
}
