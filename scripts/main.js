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
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("btn-filtro");
var txtBusqueda = document.getElementById("txt-busqueda");
btnFiltro.onclick = function () {
    var text = txtBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) {
        return c.nombre.match(text);
    });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);
mostrarCursosAprendiz(ap.cursos);
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
function mostrarCursosAprendiz(cursos) {
    var tbodyCursos = document.createElement("tbody");
    var estado = cursos.map(function (c) { return (c.calificacion > 60) ? 'green' : 'red'; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td></tr>\n    <td>").concat(curso.horas, "</td>\n    <td style=\"color:").concat(estado[index], "\">").concat(curso.calificacion, "</td>\n    <td>").concat(curso.certificado, "</td>\n    <td>").concat(curso.anio, "</td>");
        tbodyCursos.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(tbodyCursos);
}
