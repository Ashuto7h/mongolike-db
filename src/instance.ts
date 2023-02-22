import { ConnectParams } from './connect';

export let instance: ConnectParams | null = null;

export const setInstance = (value: ConnectParams) => {
  instance = value;
  return instance;
};

class schema {}

class model {}

class RiftInstance {}
