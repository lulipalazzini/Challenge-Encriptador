let textoIngresado = document.getElementById("ingresarTexto");
let textoEncriptado = document.getElementById("textoEncriptado");

function ocultar() {
  let textoEnc1 = document.getElementById("textoGrande");
  let textoEnc2 = document.getElementById("textoChico");
  let fotoEnc = document.getElementById("imgEncriptador");
  let mostrarTexto = document.getElementById("mostrarTexto");
  let botonCopiar = document.getElementById("botonCopiar");

  textoEnc1.classList.add("ocultar");
  textoEnc2.classList.add("ocultar");
  fotoEnc.classList.add("ocultar");
  mostrarTexto.classList.remove("ocultar");
  botonCopiar.classList.remove("ocultar");
}

function modificarVocales(mensaje) {
  mensaje = mensaje.replace(/i/g, "imes");
  mensaje = mensaje.replace(/a/g, "ai");
  mensaje = mensaje.replace(/e/g, "enter");
  mensaje = mensaje.replace(/o/g, "ober");
  mensaje = mensaje.replace(/u/g, "ufat");

  return mensaje;
}

function encriptar() {
  ocultar();
  let mensajeOriginal = document.getElementById("ingresarTexto").value;
  let mensajeModificado = modificarVocales(mensajeOriginal);
  document.getElementById("mostrarTexto").innerText = mensajeModificado;
}

function modificarEncriptacion(mensajeEncriptado) {
  mensajeEncriptado = mensajeEncriptado.replace(/ufat/g, "u");
  mensajeEncriptado = mensajeEncriptado.replace(/ober/g, "o");
  mensajeEncriptado = mensajeEncriptado.replace(/imes/g, "i");
  mensajeEncriptado = mensajeEncriptado.replace(/enter/g, "e");
  mensajeEncriptado = mensajeEncriptado.replace(/ai/g, "a");

  return mensajeEncriptado;
}

function desencriptar() {
  ocultar();
  let mensajeModificado = document.getElementById("ingresarTexto").value;
  let mensajeOriginal = modificarEncriptacion(mensajeModificado);
  document.getElementById("mostrarTexto").innerText = mensajeOriginal;
}

function copiarTexto() {
  let texto = document.getElementById("mostrarTexto");
  let valorTexto = texto.innerText;
  navigator.clipboard.writeText(valorTexto);
}
