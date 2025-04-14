import { UserUpdateDTO } from "../dtos/user/user-update.dto";
import { User } from "../models/User";

export interface UserRepository{
     updateUser(updateUser: UserUpdateDTO): User;
}