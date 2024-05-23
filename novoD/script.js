alert("Bem-vindo!"); 
let n1=Number(prompt("Insira a nota do Bimestre 1"));
let n2=Number(prompt("Insira a nota do Bimestre 2"));
let n3=Number(prompt("Insira a nota do Bimestre 3"));
let n4=Number(prompt("Insira a nota do Bimestre 4"));
if(n1>=7){
let N1=(n2+n3+n4+n1/4)
alert (`Aluno Aprovado com ${N1}`)
}else{

   let e= Number(prompt("Insira o Valor da nota do Exame"))
let Ne=(e+N1)
if(7<Ne){
alert(`Aluno Reprovado com ${Ne} `)
 }else{
alert(`Aluno Aprovado com ${Ne} `)}}