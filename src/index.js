import { homedir } from 'os';
import { createInterface } from 'readline'
import {messages, userParams} from "./settings.js";
import {validateArgs, validateUsername} from "./validations.js";
import { parseOperation } from "./operations.js";

const main = async () => {
  console.log(`${messages.welcome} ${userParams.username}!`);
  console.log(`${messages.currentPath} ${userParams.currentPath}`);
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', async (line) => {
    console.log('')
    await parseOperation(line.split(' '));
    console.log(`${messages.currentPath} ${userParams.currentPath}`);
  })
  process.on('exit', () => {
    rl.close()
    console.log(`${messages.thank} ${userParams.username}!`)
  })
}

const init = () => {
  let userParam;
  userParams.currentPath = homedir()
  validateArgs(process.argv);
  [userParam, userParams.username] = process.argv.slice(2)[0].split('=');
  validateUsername(userParam);
  main().then()
}

init()
