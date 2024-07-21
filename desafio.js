function encriptar() {
  // @ts-ignore
  const texto = document.getElementById('inputText').value.toLowerCase();

  let txtCifrado = texto.replace(/e/gim, 'enter');
  txtCifrado = txtCifrado.replace(/o/gim, 'ober');
  txtCifrado = txtCifrado.replace(/i/gim, 'imes');
  txtCifrado = txtCifrado.replace(/a/gim, 'ai');
  txtCifrado = txtCifrado.replace(/u/gim, 'ufat');

  // @ts-ignore
  document.getElementById("imagem").style.display = "none";
  // @ts-ignore
  document.getElementById("texto").style.display = "none";
  const textArea = document.getElementById("textArea");
  // @ts-ignore
  textArea.value = txtCifrado;
  // @ts-ignore
  textArea.classList.add("content");
  // @ts-ignore
  document.getElementById("copiar").style.display = "inline-block";
}

function desencriptar() {
  // @ts-ignore
  const texto = document.getElementById("inputText").value.toLowerCase();

  let txtCifrado = texto.replace(/enter/igm, "e");
  txtCifrado = txtCifrado.replace(/ober/igm, "o");
  txtCifrado = txtCifrado.replace(/imes/igm, "i");
  txtCifrado = txtCifrado.replace(/ai/igm, "a");
  txtCifrado = txtCifrado.replace(/ufat/igm, "u");

  // @ts-ignore
  document.getElementById("imagem").style.display = "none";
  // @ts-ignore
  document.getElementById("texto").style.display = "none";
  const textArea = document.getElementById("textArea");
  // @ts-ignore
  textArea.value = txtCifrado;
  // @ts-ignore
  textArea.classList.add("content");
  // @ts-ignore
  document.getElementById("copiar").style.display = "inline-block";
}

function copiar() {
  const conteudo = document.getElementById("textArea");
  // @ts-ignore
  conteudo.select();
  document.execCommand("copy");
}
