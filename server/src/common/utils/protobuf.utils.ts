import * as fs from 'fs';
import * as protobuf from 'protobufjs';

export const writeBuf = (
  protoFilePath: string,
  lookup: string,
  message: object,
  binPath: string,
) => {
  const root = protobuf.loadSync(protoFilePath);
  const lookupType = root.lookupType(lookup);
  const errMsg = lookupType.verify(message);
  if (errMsg) {
    throw Error(errMsg);
  }
  const lookupMessage = lookupType.create(message);
  const buffer = lookupType.encode(lookupMessage).finish();
  fs.writeFileSync(binPath, buffer);
};

export const readBuf = <T>(protoFilePath: string, lookup: string, binPath: string): T => {
  const root = protobuf.loadSync(protoFilePath);
  const lookupType = root.lookupType(lookup);
  const bufferFromFile = fs.readFileSync(binPath);
  const decodedMessage = lookupType.decode(bufferFromFile);
  const object = lookupType.toObject(decodedMessage, {
    longs: String,
    enums: String,
    bytes: String,
  }) as T;

  return object;
};
