import { ConnectParams } from './connect';

export let instance: ConnectParams | null = null;

export const setInstance = (value: ConnectParams) => {
  instance = value;
  return instance;
};


export class RiftInstance {
  dbname!: string;
  dbpath?: string;
  host?: string;
  local?: boolean;
  logging?: boolean;
  password!: string;
  username!: string;
}
