import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { setInstance } from './instance';

export interface ConnectParams {
  dbname: string;
  dbpath?: string;
  host?: string;
  local?: boolean;
  logging?: boolean;
  password: string;
  username: string;
}

export const connect = ({
  dbname,
  dbpath = path.join(__dirname, '.riftdb'),
  host,
  local,
  logging,
  password,
  username,
}: ConnectParams) => {
  const dbDirPath = path.join(dbpath, dbname);
  console.log(__dirname, dbDirPath);
  if (local) {
    if (!existsSync(dbDirPath)) {
      mkdirSync(dbDirPath, { recursive: true });
    }
  } else {
    // if host not provided, give error
    // TODO: check authenticating using host url, username, password
    // create dbname if not exist on server
  }
  return setInstance({
    dbname,
    dbpath,
    host,
    local,
    logging,
    password,
    username,
  });
};
