import { Types } from 'mongoose';

export interface IUser {
  username: string;
  email: string;
  thoughts: Types.ObjectId[];
  friends: Types.ObjectId[];
  friendCount?: number;  // virtual field
}

export interface IThought {
  thoughtText: string;
  createdAt: Date;
  username: string;
  userId: Types.ObjectId;
  reactions: IReaction[];
  reactionCount?: number;
}

export interface IReaction {
  reactionId?: Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
}