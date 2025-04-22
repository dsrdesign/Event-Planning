import { CreateUserDTO } from "../dtos/user/create-user.dto";
import { User } from "../models/User";

export interface UserRepository{
     getAllUser(): User[];
     createUser(newUser: CreateUserDTO): User;
     getOneUser(idUser: number): User ;

}