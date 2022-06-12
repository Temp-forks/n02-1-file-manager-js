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
import {parseOS} from "./commands/os/operations.js";
import {printCurrentPath} from "./utils.js";

export function parseOperation(operation) {
  const [command, source, target] = operation;
  console.log('');
  switch (command) {
    case commands.up:
      goUpperDir();
      printCurrentPath();
      break;
    case commands.cd:
      goToFolder(source);
      printCurrentPath();
      break;
    case commands.ls:
      printListOfDir();
      printCurrentPath();
      break;
    case commands.cat:
      printFileContent(source);
      printCurrentPath();
      break;
    case commands.add:
      createFile(source);
      printCurrentPath();
      break;
    case commands.rn:
      renameFile(source, target);
      printCurrentPath();
      break;
    case commands.cp:
      copyFile(source, target);
      printCurrentPath();
      break;
    case commands.mv:
      moveFile(source, target);
      printCurrentPath();
      break;
    case commands.rm:
      removeFile(source);
      printCurrentPath();
      break;
    case commands.os:
      parseOS(source);
      printCurrentPath();
      break;
    case commands.hash:
      calcHash(source);
      printCurrentPath();
      break;
    case commands.compress:
      compressFile(source, target, printCurrentPath);
      break;
    case commands.decompress:
      decompressFile(source, target, printCurrentPath);
      break;
    case commands.exit:
      process.exit(0);
      break;
    default:
      console.error(messages.invalidInput);
      printCurrentPath();
  }
}
