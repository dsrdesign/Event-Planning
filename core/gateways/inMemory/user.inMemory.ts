import { UserUpdateDTO } from "@/core/dtos/user/user-update.dto";
import { User } from "@/core/models/User";
import { UserRepository } from "@/core/repositories/user.repository";

export class InMemoryUser implements UserRepository {

     updateUser(updateUser: UserUpdateDTO): User{
          return {} as User
     };
     
}