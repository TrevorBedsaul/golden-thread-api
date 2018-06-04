import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, param } from "@loopback/rest";
import { User } from "../models/user";
import { request } from "http";


export class UsersController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
    let allUsers = await this.userRepo.find();
    return await this.userRepo.find();
  }

  @get('/users')
  async getAllUsersByID(): Promise<Array<User>> {
    let allUsers = await this.userRepo.find();
    var allUserIds = new Array();
    allUsers.forEach(element => {
      allUserIds.push(element.name + " " + element.getId());
    });
    return allUserIds;
  }


  @get('/users/{id}')
  async getUserByID(@param.path.number('id') id: number): Promise<User> {
    return await this.userRepo.findById(id);
  }
}