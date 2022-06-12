import {createReadStream, createWriteStream} from 'fs';
import {resolve} from "path";
import {createBrotliCompress, createBrotliDecompress} from 'zlib';

import {messages, userParams} from "../../settings.js";

export const compressFile = (file, compressedPath, callback) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const targetPath = compressedPath.slice(-3) === '.br' ?
      resolve(userParams.currentPath, compressedPath) :
      resolve(userParams.currentPath, compressedPath + '.br');

    const readStream = createReadStream(filepath);
    const writeStream = createWriteStream(targetPath);
    const compressStream = createBrotliCompress();

    readStream
      .on('error', handleStreamError)
      .pipe(compressStream)
      .on('error', handleStreamError)
      .pipe(writeStream)
      .on('error', handleStreamError)
      .on('finish',() => {
        readStream.close();
        compressStream.close();
        writeStream.close();

        console.log(`${file} successfully compressed. Compressed file's path is ${targetPath}`);

        if(callback) {
          callback();
        }
      })
  } catch (err) {
    handleStreamError();
  }
}


export const decompressFile = (filename, decompressedPath, callback) => {
  try {
    const { filepath, targetPath } = resolvePaths(filename, decompressedPath);

    const readStream = createReadStream(filepath);
    const writeStream = createWriteStream(targetPath);

    const decompressStream = createBrotliDecompress();
    readStream
      .on('error', handleStreamError)
      .pipe(decompressStream)
      .on('error', handleStreamError)
      .pipe(writeStream)
      .on('error', handleStreamError)
      .on('finish', () => {
        readStream.close();
        decompressStream.close();
        writeStream.close();

        console.log(`${filename} successfully decompressed. Decompressed file's path is ${targetPath}`);

        if(callback) {
          callback();
        }

      })
  } catch (err) {
    handleStreamError();
  }
}

function resolvePaths(filename, path) {
  const filepath = resolve(userParams.currentPath, filename);
  const targetPath = resolve(userParams.currentPath, path);
  return {
    filepath,
    targetPath
  }
}

function handleStreamError() {
  console.error(messages.error);
}
