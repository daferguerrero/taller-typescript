import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Prácticas escenciales para el agilismo", 20, 90, true, 2022),
    new Curso("Ingeneiría de software para la web", 15, 92, true, 2023),
    new Curso("Pruebas automatizadas", 25, 58, false, 2022),
    new Curso("Principios de diseño y arquitectura", 30, 81, true, 2024)];
export var ap = new Aprendiz("David Fernando", "Guerrero Vanegas", "myAvatar.png", 38, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"/td></tr>\n                            <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n                            <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n                            <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n                            <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticasAprendiz(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados: </b></td><ts>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
