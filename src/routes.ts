import { Router } from "express";
import { configureUserRoutes } from "./services/users/infrastructure/user.routes";
import { configureSwapiRoutes } from "./services/swapi/infrastructure/swapi.routes";

export const routes = ()=>{
    const routes = Router()
    
    routes.use('/user',configureUserRoutes())
    routes.use('/swapi',configureSwapiRoutes())

    return routes
}