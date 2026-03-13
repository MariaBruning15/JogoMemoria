import { alterarTema, iniciarTema } from "./tema.js";

document.addEventListener("DOMContentLoaded", ()=>{
    iniciarTema();

    const btnAlterarTema=document.getElementById("btnAlterarTema");

    btnAlterarTema.onclick = alterarTema;
});