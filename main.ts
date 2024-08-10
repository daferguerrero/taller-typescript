import { Aprendiz, NivelEducativo } from "./aprendiz.js";

export const ap = new Aprendiz ("David Fernando", "Guerrero vanegas", "myAvatar.png", 38, NivelEducativo.POSGRADO);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;

mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
  let tbodyAprendiz = document.createElement("tbody");
  tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"/td></tr>
                            <tr><td>Nombres:<td>${aprendiz.nombres}</td>
                            <tr><td>Apellidos:<td>${aprendiz.apellidos}</td></tr>
                            <tr><td>Nivel educativo:<td>${aprendiz.nivelEducativo}</td></tr>
                            <tr><td>Edad:<td>${aprendiz.edad}</td></tr>`
                            aprendizTable.appendChild(tbodyAprendiz);
}