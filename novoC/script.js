alert("Bem-vindo!"); 
let n1=Number(prompt("Insira a nota do Bimestre 1"));
let n2=Number(prompt("Insira a nota do Bimestre 2"));
let n3=Number(prompt("Insira a nota do Bimestre 3"));
let n4=Number(prompt("Insira a nota do Bimestre 4"));
if(n1>=5){
let N1=(n2+n3+n4+n1/4)
   alert(`Primeiro Bimestre Aprovado com ${N1}% de Média`);
}else{
   alert(`Primeiro Bimestre Reprovado com ${N1}% de Média`)
};
if(n2>=5){
let N2=(n1+n3+n4+n2/4)
   alert(`Segundo Bimestre Aprovado com ${N2}% de Média`);
}else{
   alert(`Segundo Bimestre Reprovado com ${N2}% de Média`)
};
if(n3>=5){
let N3=(n2+n1+n4+n3/4)
   alert(`Terceiro Bimestre Aprovado com ${N3}% de Média`);
}else{
   alert(`Terceiro Bimestre Reprovado com ${N3}% de Média`)
};
if(n4>=5){
let N1=(n2+n3+n1+n4/4)
   alert(`Quarto Bimestre Aprovado com ${N4}% de Média`);
}else{
   alert(`Quarto Bimestre Reprovado com ${N4}% de Média`)
};
