function process() {
  const text = document.getElementById("text").value.toLowerCase();
  const action = document.getElementById("action").value;
  let result = "";

  if (action === "encrypt") {
    result = encrypt(text);
  } else if (action === "decrypt") {
    result = decrypt(text);
  }

  document.getElementById("result").value = result;
}

function encrypt(text) {
  // Se reemplazan las letras por las llaves de encriptación correspondientes
  text = text.replaceAll("e", "enter");
  text = text.replaceAll("i", "imes");
  text = text.replaceAll("a", "ai");
  text = text.replaceAll("o", "ober");
  text = text.replaceAll("u", "ufat");

  // Se devuelve el texto encriptado
  return text;
}

function decrypt(text) {
  // Se reemplazan las llaves de encriptación por las letras correspondientes
  text = text.replaceAll("enter", "e");
  text = text.replaceAll("imes", "i");
  text = text.replaceAll("ai", "a");
  text = text.replaceAll("ober", "o");
  text = text.replaceAll("ufat", "u");

  // Se devuelve el texto desencriptado
  return text;
}

function copy() {
  const result = document.getElementById("result");
  result.select();
  navigator.clipboard
    .writeText(result.value)
    .then(() => {
      alert("Texto copiado: " + result.value);
    })
    .catch((error) => {
      alert("Error al copiar el texto: " + error);
    });
}
