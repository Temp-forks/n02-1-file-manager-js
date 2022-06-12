import { dirname, resolve } from "path";
import { readdirSync } from 'fs';

import { userParams } from "../../settings.js";

export const goUpperDir = () => {
  userParams.currentPath = dirname(userParams.currentPath);
}

export const goToFolder = (folder) => {
  userParams.currentPath = resolve(userParams.currentPath, folder ?? '');
}

export const printListOfDir = () => {
  const list = readdirSync(userParams.currentPath);
  list.map(item => console.log(item));
}
