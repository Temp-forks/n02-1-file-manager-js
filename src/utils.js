import {messages} from "./settings.js";
import {userParams} from "./settings.js";

export function printCurrentPath() {
    console.log(`${messages.currentPath} ${userParams.currentPath}`);
}
