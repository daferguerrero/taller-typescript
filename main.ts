import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [new Curso("Prácticas escenciales para el agilismo", 20, 90, true, 2022),
              new Curso("Ingeneiría de software para la web", 15, 92, true, 2023),
              new Curso("Pruebas automatizadas", 25, 58, false, 2022),
              new Curso("Principios de diseño y arquitectura", 30, 81, true, 2024)]

export const ap = new Aprendiz ("David Fernando",
                                "Guerrero Vanegas",
                                "myAvatar.png",
                                38,
                                NivelEducativo.POSGRADO,
                                cursos
                                );

console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

mostrarDatosAprendiz(ap);
mostrarEstadisticasAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
  let tbodyAprendiz = document.createElement("tbody");
  tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"/td></tr>
                            <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
                            <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
                            <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
                            <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
  aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticasAprendiz(aprendiz: Aprendiz): void {
  let numeroCertificados: number = aprendiz.darCursosCertificados();
  let trElement: HTMLElement = document.createElement("tr");
  trElement.innerHTML = `<td><b>Cursos certificados: </b></td><ts>${numeroCertificados}</td>`
  estadisticasTable.appendChild(trElement);
}