import { UserRepository } from "@/domain/repositories/user.repository";
import { CreateUserDTO } from "@/domain/dtos/user/create-user.dto";
import { User } from "@/domain/models/User";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

   execute(data: CreateUserDTO): User {
     return this.userRepository.createUser(data);
  }
}
