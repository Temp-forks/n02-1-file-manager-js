import {EOL, homedir, userInfo, arch} from "os";

import {printCPUS} from "./handleCommand.js";
import {messages} from "../../settings.js";

export const parseOS = (param) => {
  switch (param) {
    case '--EOL':
      console.log(`Default system End-Of-Line: ${JSON.stringify(EOL)}.`);
      break;
    case '--cpus':
      printCPUS()
      break;
    case '--homedir':
      console.log(`Homedir is ${homedir()}.`);
      break;
    case '--username':
      console.log(`System username is ${userInfo().username}.`);
      break;
    case '--architecture':
      console.log(`CPU architecture is ${arch()}.`);
      break;
    default:
      console.log(messages.invalidInput)
  }
}
