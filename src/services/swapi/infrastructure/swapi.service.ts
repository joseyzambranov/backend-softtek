import { SwapiAxiosRepository } from "./swapi.axio.repository";
import { SwapiUseCase } from "../application/swapi.use-case";

class SwapiService {

    swapiUseCase : SwapiUseCase

    constructor(){
        this.swapiUseCase = new SwapiUseCase(new SwapiAxiosRepository)
    }

    async getAllPeople() {
        return await this.swapiUseCase.getAllPeople()
    }
}
export const swapiService = new SwapiService