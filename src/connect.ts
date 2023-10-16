import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { RiftInstance, setInstance } from './instance';

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
}: RiftInstance) => {
  const dbDirPath = path.join(dbpath, dbname);
  console.log(__dirname, dbDirPath);
  if (local) {
    if (!existsSync(dbDirPath)) {
      mkdirSync(dbDirPath, { recursive: true });
    }
    // TODO: if db exist, check username and password. throw error if it is not correct.
    // if not exists, create it with given username and password
    // if server exist at given localhost:port, connect to server
    // else create server at localhost with given port or default 4224
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
