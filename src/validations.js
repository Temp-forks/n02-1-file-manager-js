import {messages, userParams} from "./settings.js";

export const validateArgs = (args) => {
  if (args.length <= 2) {
    console.log(messages.invalidInput);
    console.log('Please set up user correctly, type: "node src/index.js --username=USERNAME"');
    process.exit()
  }
}

export const validateUsername = (userParam) => {
  if (userParam !== '--username' || !userParams.username) {
    console.log(messages.invalidUsername);
    console.log('Please set up user correctly, type: "node src/index.js --username=USERNAME"');
    process.exit();
  }
}
