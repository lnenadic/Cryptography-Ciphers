import { cesar } from "./cesar.js";
import { railfence, railfenceDecode } from "./railfence.js";
import { encrypt, decrypt } from "./vigniere.js";
import { rot13 } from "./root.js";

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
      case "cesar":
        output = cesar(input, Number(keyField.val()));
        break;
      case "railfence":
        output = railfence(input, Number(keyField.val()));
        break;
      case "vigniere":
        output = encrypt(input, Number(keyField.val()));
        break;
      case "root":
        output = rot13(input, Number(keyField.val()));
        break;
    }
  } else {
    switch (algorithm) {
      case "cesar":
        // TODO find decrypt for cesar
        break;
      case "railfence":
        output = railfenceDecode(input, Number(keyField.val()));
        break;
      case "vigniere":
        output = decrypt(input, Number(keyField.val()));
        break;
      case "root":
        output = rot13(input, Number(keyField.val()));
        break;
    }
  }
  outputField.text(output);
});