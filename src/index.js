import { homedir } from 'os';
import { createInterface } from 'readline'
import {messages, userParams} from "./settings.js";
import {validateArgsLength, validateUsernameParameter} from "./validations.js";
import { parseOperation } from "./operations.js";

function main({ directory, username }) {
  userParams.username = username;
  userParams.currentPath = directory;

  console.log(`${messages.welcome} ${userParams.username}!`);
  console.log(`${messages.currentPath} ${userParams.currentPath}`);
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (line) => {
    parseOperation(line.split(' '));
  })

  process.on('exit', () => {
    rl.close();
    console.log(`${messages.thank} ${userParams.username}!`)
  })
}

function init() {
  const [key, value] = process.argv.slice(2)[0].split('=');

  try {
    validateArgsLength(process.argv.length);
    validateUsernameParameter(key, value);
  } catch (error) {
    console.error(error.message);
    console.error(messages.incorrectArguments);
    process.exit(1);
  }

  main({
    directory: homedir(),
    username: value,
  });
}

init();
