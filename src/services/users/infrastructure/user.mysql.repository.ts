import { knex } from "../../../db/mysql-connect";
import { UserGetAllParams } from '../domain/user.get-params';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.schema';

let userDb = "users"
export class UserMysqlRepository implements UserRepository {

  async getAll(queryParams: UserGetAllParams): Promise<User[]> {
    const users = await knex
      .select('*')
      .from(userDb)
      .where((qb: any) => {
        if (queryParams?.search) {
          qb.where('name', 'like', `%${queryParams?.search}%`);
        }

        if (queryParams?.startDate && queryParams?.endDate) {
          qb.whereBetween('created_at', [
            queryParams?.startDate,
            queryParams?.endDate,
          ]);
        }
      });

    return users;
  }

  async create(input: Partial<User>) {
    await knex(userDb).insert({
      name: input.name,
      status: 1,
    });
  }

}