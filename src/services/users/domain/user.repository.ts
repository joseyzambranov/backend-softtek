import { UserGetAllParams } from './user.get-params';
import { User } from './user.schema';

export interface UserRepository {
  getAll(query: UserGetAllParams): Promise<User[]>;
  create(payload: Partial<User>): Promise<void>;
}