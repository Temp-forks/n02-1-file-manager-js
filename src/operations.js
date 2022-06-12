import {commands} from "./settings.js";
import {goToFolder, goUpperDir, printListOfDir} from "./commands/nav/handleCommand.js";

export const parseOperation = (operation) => {
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
  }
}
