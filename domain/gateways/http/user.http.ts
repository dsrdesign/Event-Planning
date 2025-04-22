import { CreateUserDTO } from "@/domain/dtos/user/create-user.dto";
import { User } from "@/domain/models/User";
import { UserRepository } from "@/domain/repositories/user.repository";

export class HttpUser implements UserRepository {

     createUser(newUser: CreateUserDTO): User {

          return {} as User;

     };

     getOneUser(idUser: number): User {
          return {} as User;
     }

     getAllUser(): User[] {
          return {} as User[]
     }
     
}