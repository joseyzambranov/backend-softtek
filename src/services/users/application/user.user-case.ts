import { UserRepository } from "../domain/user.repository";

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async getAll(query: any) {
    try {
      const users = await this.userRepository.getAll(query);

      return users;
    } catch (error) {
      throw new Error('Error obteniendo usuarios');
    }
  }

  async create(data: any) {
    try {
      const newUser = this.userRepository.create(data);

      return newUser;
    } catch (error) {
      throw new Error('Error creando usuario');
    }
  }
}