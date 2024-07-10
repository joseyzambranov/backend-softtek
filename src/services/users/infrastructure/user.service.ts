import { UserMysqlRepository } from "./user.mysql.repository";
import { UserUseCase } from "../application/user.user-case";

export class UserService {
  private userUseCase: UserUseCase;

  constructor() {
    this.userUseCase = new UserUseCase(new UserMysqlRepository());
  }

  async getAll(query: any) {
    return await this.userUseCase.getAll(query);
  }

  async create(data: any) {
    return await this.userUseCase.create(data);
  }

}