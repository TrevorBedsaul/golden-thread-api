import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { request } from "http";
import { Charity } from "../models/charity";
import { CharityRepository } from "../repositories/charity.repository";

export class CharitiesController {

    constructor(
        @repository(CharityRepository.name) private charityRepo: CharityRepository
    ) { }

    @get('/charities')
    async getCharitiesList(): Promise<Array<Charity>> {
        return await this.charityRepo.find();
    }

    @get('/charities/{id}')
    async getCharityByID(@param.path.number('id') id: number): Promise<Charity> {
        try {
            return await this.charityRepo.findById(id);
        }
        catch{
            throw new HttpErrors.Unauthorized('charity does not exist');
        }
    }
}