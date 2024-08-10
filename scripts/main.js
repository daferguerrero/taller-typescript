import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz("David Fernando", "Guerrero vanegas", "myAvatar.png", 38, NivelEducativo.POSGRADO);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"/td></tr>\n                            <tr><td>Nombres:<td>").concat(aprendiz.nombres, "</td>\n                            <tr><td>Apellidos:<td>").concat(aprendiz.apellidos, "</td></tr>\n                            <tr><td>Nivel educativo:<td>").concat(aprendiz.nivelEducativo, "</td></tr>\n                            <tr><td>Edad:<td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
