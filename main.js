var parcial,final,promedio;
parcial = parseFloat(prompt("parcial"));
final = parseFloat(prompt("final"));
promedio = (parcial+final)/2;

if (promedio >= 6){
    document.write("El promedio es "+promedio+" Aprobado");
}else{
    document.write("El promedio es "+promedio+" Desaprobado");
}