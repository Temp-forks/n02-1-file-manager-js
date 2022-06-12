import {commands, messages} from "./settings.js";
import {goToFolder, goUpperDir, printListOfDir} from "./commands/nav/handleCommand.js";
import {
  copyFile,
  createFile,
  moveFile,
  printFileContent,
  removeFile,
  renameFile
} from "./commands/file/handleCommand.js";
import {calcHash} from "./commands/hash/handleCommand.js";
import {compressFile, decompressFile} from "./commands/archive/handleCommand.js";

export const parseOperation = async (operation) => {
  switch (operation[0]) {
    case commands.up:
      goUpperDir();
      break;
    case commands.cd:
      goToFolder(operation[1]);
      break;
    case commands.ls:
      printListOfDir()
      break;
    case commands.cat:
      printFileContent(operation[1]);
      break;
    case commands.add:
      createFile(operation[1]);
      break;
    case commands.rn:
      renameFile(operation[1], operation[2]);
      break;
    case commands.cp:
      copyFile(operation[1], operation[2]);
      break;
    case commands.mv:
      moveFile(operation[1], operation[2]);
      break;
    case commands.rm:
      removeFile(operation[1]);
      break;
    case commands.hash:
      calcHash(operation[1]);
      break;
    case commands.compress:
      await compressFile(operation[1], operation[2]);
      break;
    case commands.decompress:
      await decompressFile(operation[1], operation[2]);
      break;
    default:
      console.log(messages.error);
  }
}
