import { repository } from "@loopback/repository";
import { post, get, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post('/login')
  async sendUserInfo(@requestBody() username: string, password: string) {
    return true;
  }
}