import { Router } from "express";
import { configureUserRoutes } from "./services/users/infrastructure/user.routes";

export const routes = ()=>{
    const routes = Router()
    
    routes.use('/user',configureUserRoutes())

    return routes
}