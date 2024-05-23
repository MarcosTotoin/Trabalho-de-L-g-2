   alert("Bem-vindo!"); 
 let A=Number(prompt("Insira a incógnita a da equação"));
 let B=Number(prompt("Insira a incógnita a da equação"));
 let C=Number(prompt("Insira a incógnita a da equação"));
 let D=(((B**2)-1*(4*A*C)))**(1/2);
if (D>=0){
 let R=(-1*(B)+(D))/2*A
 let R2=(-1*(B)-(D))/2*A
   alert(`X1=${R},X2=${R2}`)
}else{
alert("Esta equação não possúi raíz, pois o conjunto Delta é negativo")}