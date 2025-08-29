import {
  checkPassword,
  checkPasswordAndThrowReason,
} from "./PasswordChecker.js";

const result = checkPassword("ASDADAdffegtjkkk7#");

console.log(result);

const result2 = checkPasswordAndThrowReason("ASDADAdwegtjkkk6#");

console.log(result2);
