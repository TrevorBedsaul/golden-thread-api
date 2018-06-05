import { Charity } from "../models/charity";
import { CharityRepository } from "../repositories/charity.repository";
export declare class CharitiesController {
    private charityRepo;
    constructor(charityRepo: CharityRepository);
    getCharitiesList(): Promise<Array<Charity>>;
    getCharityByID(id: number): Promise<Charity>;
}
