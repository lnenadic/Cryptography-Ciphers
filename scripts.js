import { phonetic } from "./phonetic.js";
import { encode, decode } from "./railfence.js";
import { encrypt, decrypt } from "./vigniere.js";
import { rot13 } from "./root.js";
import { cesar } from "./cesar.js";

const plainTextField = $("#plainText");
const chiperType = $("#typeChipers");
const encryptType = $("#encryptDE");
const keyField = $("#key");
const outputField = $("#sifrat");
const button = $("#sifriraj");

button.on("click", function () {
  const input = plainTextField.val();

  const algorithm = chiperType.find(":selected").val();
  const type = encryptType.find(":selected").val();

  let output = "";
  if (type == "encrypt") {
    switch (algorithm) {
      case "phonetic":
        output = phonetic(input, Number(keyField.val()));
        break;
      case "railfence":
        output = encode(input, Number(keyField.val()));
        break;
      case "vigniere":
        output = encrypt(input, Number(keyField.val()));
        break;
      case "root":
        output = rot13(input, Number(keyField.val()));
        break;
      case "caesar":
        output = cesar(input, Number(keyField.val()));
        break;
    }
  } else {
    switch (algorithm) {
      case "phonetic":
        // TODO
        break;
      case "railfence":
        output = decode(input, Number(keyField.val()));
        break;
      case "vigniere":
        output = decrypt(input, Number(keyField.val()));
        break;
      case "root":
        output = rot13(input, Number(keyField.val()));
        break;
      case "caesar":
        // TODO
        break;
    }
  }
  outputField.text(output);
});