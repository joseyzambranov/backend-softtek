import axios from "axios";
import { SW_URL_API } from "../../../shared/constants";

export class SwapiAxiosRepository{
 
 swapi;

 constructor(){
    this.swapi = axios.create({
        baseURL:SW_URL_API
    })
 }
 
 
    async getAllPeople(){
    try {

        const res = await this.swapi.get('/people')
        const data = res.data

        return data

    } catch (error) {
        throw error
    }
 }   
}