import { CreateUserDTO } from "@/domain/dtos/user/create-user.dto";
import { User } from "@/domain/models/User";
import { UserRepository } from "@/domain/repositories/user.repository";
import { useUserStore } from "@/store/user.store";

export class InMemoryUser implements UserRepository {

     createUser(newUser: CreateUserDTO): User {
          const id = Math.random();
          const {name, phone, email, password, role,} = newUser
          const user : User = { id, name, phone, email, password, role}
          useUserStore.getState().addUser(user);

          return  user

     };

     getOneUser(idUser: number): User {
          return useUserStore.getState().getUserById(idUser) as User;
     }

     getAllUser(): User[] {
          return useUserStore.getState().users
     }

}