import { repository, WhereBuilder } from "@loopback/repository";
import { request } from "http";
import { UserRepository } from "../repositories/user.repository";
import { CharityRepository } from "../repositories/charity.repository";
import { post, get, requestBody, param, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { Charity } from "../models/charity";
import { Project } from "../models/project";
import { Post } from "../models/post";
import { ProjectRepository } from "../repositories/project.repository";
import { PostRepository } from "../repositories/post.repository";

export class CharitiesController {

    constructor(
        @repository(CharityRepository) private charityRepo: CharityRepository, private projectRepo: ProjectRepository, private postRepo: PostRepository
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
    async getAllCharityProjects(@param.path.number('id') id: number): Promise<Array<Project>> {
        return await this.projectRepo.find();
    }

    
    @get('/charities/{id}/projects/{id}')
    async getCharityProjectByID(@param.path.number('id') id: number): Promise<Project> {
        return await this.projectRepo.findById(id);
    }

    @post('/charities/{id}/projects/{id}/posts')
    async makeCharityProjectPost(@requestBody() post: Post): Promise<Post> {
        return await this.postRepo.create(post);
    }
}