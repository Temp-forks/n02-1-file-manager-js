import { createReadStream, createWriteStream } from 'fs';
import {resolve} from "path";
import { createBrotliCompress, createBrotliDecompress } from 'zlib';

import {messages, userParams} from "../../settings.js";

export const compressFile = async (file, compressedPath) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const targetPath = compressedPath.slice(-3) === '.br' ?
      resolve(userParams.currentPath, compressedPath) :
      resolve(userParams.currentPath, compressedPath + '.br');

    const readStream = createReadStream(filepath);
    const writeStream = createWriteStream(targetPath);

    const compress = createBrotliCompress();
    const stream = await readStream.pipe(compress).pipe(writeStream);
    stream.on('finish', () => {
      console.log(`${file} successfully compressed. Compressed file's path is ${targetPath}`);
    })
  } catch (err) {
    console.log(messages.error)
  }
}


export const decompressFile = async (file, decompressedPath) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const targetPath = resolve(userParams.currentPath, decompressedPath);

    const readStream = createReadStream(filepath);
    const writeStream = createWriteStream(targetPath);

    const decompress = createBrotliDecompress();
    const stream = await readStream.pipe(decompress).pipe(writeStream);

    await stream.on('finish', () => {
      console.log(`${file} successfully decompressed. Decompressed file's path is ${targetPath}`);
    })
  } catch (err) {
    console.log(messages.error)
  }
}
