function mostrar()
{var nota;
var promedio;
var sexo;
var acumNotas=0;
var contVarones=0;
var sexoNotaBaja;
var flag=0;
var notaBaja;

for(var i=0;i<5;i++){
      
    nota=parseInt(prompt("Ingrese nota: "));
    while(nota<0 || nota>10){
        nota=parseInt(prompt("Reingrese nota: "));
    }
    sexo=prompt("Ingrese sexo: ");
    while(sexo!="f" && sexo!="m"||isNaN(nota)){
        sexo=prompt("Reingrese sexo: ");
    } 
    acumNotas=acumNotas+nota;
    if(nota<notaBaja||flag==0){
        notaBaja=nota;
        sexoNotaBaja=sexo;
    flag=1;
    }
   if(sexo=="m"&&nota>=6){
       contVarones++;
   }
}
promedio=acumNotas/5;

alert("Promedio: "+promedio+ "\n nota mas baja y sexo: " +notaBaja+sexoNotaBaja+"\n Cantidad de Varones: "+contVarones );


  
}


