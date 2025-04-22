import { UserRepository } from "@/domain/repositories/user.repository";
import { User } from "@/domain/models/User";


export class GetOneUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

   execute(id: number): User {
     return this.userRepository.getOneUser(id);
  }
}
