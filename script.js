function calcular(){
  var nota1 = document.getElementById("nota1").value;
  nota1 = parseFloat(nota1);
  var nota2 = document.getElementById("nota2").value;
 nota2 = parseFloat(nota2);
  var nota3 = document.getElementById("nota3").value;
  nota3 = parseFloat(nota3);
  var nota4 = document.getElementById("nota4").value;
  nota4 = parseFloat(nota4);
  var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
  
  document.getElementById("media").innerHTML = "O RESULTADO É: " + notaFinal;
  
  var mediaLocal = document.getElementById("media1").value;
  var aprov = document.getElementById("medialocal");
  if (notaFinal >= mediaLocal){
    aprov.innerHTML = "APROVADO";
  }
  else{
    aprov.innerHTML = "REPROVADO";
  }
}