import { UserUpdateDTO } from "@/domain/dtos/user/user-update.dto";
import { User } from "@/domain/models/User";
import { UserRepository } from "@/domain/repositories/user.repository";

export class InMemoryUser implements UserRepository {

     updateUser(id: number, updateUser: UserUpdateDTO): User{
          return {} as User
     };
     
}