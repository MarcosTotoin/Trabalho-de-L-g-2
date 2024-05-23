 alert("Bem-vindo!"); 
  let a=Number(prompt("Insira o primeiro valor"));
  let b=Number(prompt("Insira o segundo valor"));
  let c=Number(prompt("Insira o terceiro valor"));
   if (a>=b && a>=c){
 maior=a
   if(b>+c){medio=b
 menor=c
}else{
 medio=c
 menor=b}}

 if (b>=a && b>=c){
 maior=b
   if(a>+c){medio=a
 menor=c
}else{
 medio=c
 menor=a}}

 if (c>=b && c>=a){
 maior=c
   if(b>+a){medio=b
 menor=a
}else{
 medio=a
 menor=b}}
 alert (`${menor} e ${medio} e ${maior}`)