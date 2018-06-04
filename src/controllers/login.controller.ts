import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/login')
  async sendUserInfo(@requestBody() login: any) {
    let allUsers = await this.userRepo.find();
    allUsers.forEach(element => {
        if(element.email == login.email && element.password == login.password) {
            return true;
        }
    });
    return false;
  }
}