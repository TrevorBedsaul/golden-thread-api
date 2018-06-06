import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
import { Project } from "../models/project";
export declare class CharitiesController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    getCharitiesList(): Promise<Array<Charity>>;
    getCharityByID(id: number): Promise<Charity>;
    getAllCharityProjects(): Promise<void>;
    getCharityProjectByID(id: number): Promise<Project>;
    getCharityProjectPosts(): Promise<void>;
}
