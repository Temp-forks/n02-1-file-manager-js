import {messages, userParams} from "./settings.js";

export const validateArgs = (args) => {
  if (args.length <= 2) {
    console.log(messages.invalidInput);
    process.exit()
  }
}

export const validateUsername = (userParam) => {
  if (userParam !== '--username' || !userParams.username) {
    console.log(messages.invalidUsername);
    process.exit();
  }
}
