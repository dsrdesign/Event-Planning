import { User } from "@/domain/models/User";
import { UserRepository } from "@/domain/repositories/user.repository";

export class GetAllUsersUseCase {
     
  constructor(private readonly userRepository: UserRepository) {}

  execute(): User[] {
    return this.userRepository.getAllUser();
  }
}
