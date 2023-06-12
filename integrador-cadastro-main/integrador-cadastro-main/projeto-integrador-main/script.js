const registerbtn = document.querySelector("#btn-avanco");
const fullName = document.querySelector("#name");
const fullCpf = document.querySelector("#cpf");
const fullNas = document.querySelector("#datNasc");
const fullTel = document.querySelector("#tel");



registerbtn.addEventListener("click", () => {
    if (fullName.value.trim() === "" || fullCpf.value.trim() === "" || fullNas.value.trim() === "" || fullTel.value.trim() === "" ) {
    return (document.querySelector("#nameErro" ).innerHTML = "*Está vazio");
 } 
    window.location.href = "./cadastro02.html";
});

registerbtn.addEventListener("click", () => {
    if (fullCpf.value.trim() === ""  ) {
    return (document.querySelector("#cpfErro" ).innerHTML = "*Está vazio");
 } 
    window.location.href = "./cadastro02.html";
 });

registerbtn.addEventListener("click", () => {
    if (fullNas.value.trim() === ""  ) {
    return (document.querySelector("#nascErro" ).innerHTML = "*Está vazio");
 } 
    window.location.href = "./cadastro02.html";
});

registerbtn.addEventListener("click", () => {
    if (fullTel.value.trim() === ""  ) {
    return (document.querySelector("#telErro" ).innerHTML = "*Está vazio");
 } 
    window.location.href = "./cadastro02.html";
});

  
