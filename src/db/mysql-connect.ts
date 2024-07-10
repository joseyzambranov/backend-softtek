import mysql from 'mysql2/promise';
import { DB } from '../shared/constants';

let connectionIntance: mysql.Pool | null = null;

export async function createConnection() {
  if (!connectionIntance) {
    connectionIntance = mysql.createPool(DB as string);
  }

  return connectionIntance;
}

export const knex = require('knex')({
  client: 'mysql2',
  connection: DB,
});