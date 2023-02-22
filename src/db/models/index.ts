import { Sequelize } from "sequelize";
import { User } from "./user.model";
import { Post } from "./post.model";

export const setupModels = (sequelize: Sequelize) => {
  User.initialize(sequelize);
  Post.initialize(sequelize);
};
