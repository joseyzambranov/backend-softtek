import { translateSwapiPeople } from "../../../i18n/people";
import { SwapiRepository } from "../domain/swapi.repository"
import { translateProperty } from "../../../lb/translate-property";
export class SwapiUseCase{


    constructor(private swapiRepository:SwapiRepository){}

    async getAllPeople(){
        try{

            const data = await this.swapiRepository.getAllPeople()
            const mappedData = data?.results?.map((c: Record<string, string>) =>
                translateProperty(c, translateSwapiPeople)
              );
        
              return mappedData;


        }catch(error){
            throw new Error("Error in get people")
        }
    }
}