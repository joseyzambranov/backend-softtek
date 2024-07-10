import ServerlessHttp from 'serverless-http';
import { configureApp } from './server';

export const startApp = ServerlessHttp(configureApp('/api'));