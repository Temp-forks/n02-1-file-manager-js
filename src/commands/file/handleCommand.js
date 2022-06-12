import { resolve } from "path";
import { readFileSync, openSync, renameSync, existsSync, mkdirSync, copyFileSync, unlinkSync} from "fs";

import {messages, userParams} from "../../settings.js";

export const printFileContent = (file) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const data = readFileSync(filepath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(messages.error);
  }
}

export const createFile = (file) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    openSync(filepath, 'w');
    console.log(`${file} successfully created!`);
  } catch (err) {
    console.error(messages.error);
  }
}

export const renameFile = (oldFile, newFile) => {
  try {
    const oldFilePath = resolve(userParams.currentPath, oldFile);
    const newFilePath = resolve(userParams.currentPath, newFile);
    renameSync(oldFilePath, newFilePath);
    console.log(`${oldFile} successfully renamed to ${newFile}!`);
  } catch (err) {
    console.error(messages.error);
  }
}

export const copyFile = (file, newDir) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const newDirPath = resolve(userParams.currentPath, newDir);
    const newFilePath = resolve(newDirPath, file);
    if (!existsSync(newDirPath)) {
      mkdirSync(newDirPath, { recursive: true });
    }
    copyFileSync(filepath, newFilePath);
    console.log(`${file} successfully copied into ${newDir}!`);
  } catch (err) {
    console.error(messages.error);
  }
}

export const moveFile = (file, newDir) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    const newDirPath = resolve(userParams.currentPath, newDir);
    const newFilePath = resolve(newDirPath, file);
    if (!existsSync(newDirPath)) {
      mkdirSync(newDirPath, { recursive: true });
    }
    copyFileSync(filepath, newFilePath);
    unlinkSync(filepath)
    console.log(`${file} successfully moved into ${newDir}!`);
  } catch (err) {
    console.error(messages.error);
  }
}

export const removeFile = (file) => {
  try {
    const filepath = resolve(userParams.currentPath, file);
    unlinkSync(filepath)
    console.log(`${file} successfully removed!`);
  } catch (err) {
    console.error(messages.error);
  }
}
