import { repository } from "@loopback/repository";
import { request } from "http";
import { UserRepository } from "../repositories/user.repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { Charity } from "../models/charity";
import { Project } from "../models/project";

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

    @get('/charities/{id}/projects')
    async getAllCharityProjects(@param.path.number('id') id: number): Promise<number> {
        try {
            
        }
        catch{
            throw new HttpErrors.Unauthorized('charity does not exist');
        }
    }

    
    @get('/charities/{id}/projects/{id}')
    async getCharityProjectByID(@param.path.number('id') id: number): Promise<Project> {
        return new Project();
    }

    @post('/charities/{id}/projects/{id}/posts')
    async getCharityProjectPosts() {
        
    }
}