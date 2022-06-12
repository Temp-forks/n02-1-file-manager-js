import { createReadStream, createWriteStream, existsSync } from 'fs';
import {resolve} from "path";
import { createBrotliCompress, createBrotliDecompress } from 'zlib';

import {messages, userParams} from "../../settings.js";

export const compressFile = (file, compressedPath) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    if (!existsSync(filepath)) {
        console.log(messages.error)
        return;
    }
    const targetPath = compressedPath.slice(-3) === '.br' ?
      resolve(userParams.currentPath, compressedPath) :
      resolve(userParams.currentPath, compressedPath + '.br');

    const readStream = createReadStream(filepath);
    const writeStream = createWriteStream(targetPath);

    const compress = createBrotliCompress();
    readStream.pipe(compress)
      .on('error', handleStreamErr)
      .pipe(writeStream)
      .on('error', handleStreamErr)
      .on('finish',() => {
        console.log(`${file} successfully compressed. Compressed file's path is ${targetPath}`);
      })
  } catch (err) {
    console.log(messages.error)
  }
}


export const decompressFile = (file, decompressedPath) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const targetPath = resolve(userParams.currentPath, decompressedPath);

    if (!existsSync(filepath)) {
      console.log(messages.error)
      return;
    }

    const readStream = createReadStream(filepath);
    const writeStream = createWriteStream(targetPath);

    const decompress = createBrotliDecompress();
    readStream.pipe(decompress)
      .on('error', handleStreamErr)
      .pipe(writeStream)
      .on('error', handleStreamErr)
      .on('finish', () => {
          console.log(`${file} successfully decompressed. Decompressed file's path is ${targetPath}`);
      })
  } catch (err) {
    console.log(messages.error)
  }
}

function handleStreamErr () {
  console.log(messages.error)
}
