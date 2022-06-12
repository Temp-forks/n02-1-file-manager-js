import {messages} from "./settings.js";

export const validateArgsLength = (length) => {
  if (length <= 2) {
    throw new Error(messages.invalidInput);
  }
}

export const validateUsernameParameter = (paramKey, paramValue) => {
  if (paramKey !== '--username' || !paramValue) {
    throw new Error(messages.invalidUsername);
  }
}
