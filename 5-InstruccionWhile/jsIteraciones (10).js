function mostrar()
{

	var promedios;
	var diferencia;
	var respuesta;
	var numero;
	var positivo;
	var negativo;
	var contCeros=0;
	var contPositivos=0;
	var contNegativo=0;
	var pares;
	var promedioNeg;
	var promedioPositivos;
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		// Me fijo el signo del numero
		//El numero puede ser negativo, positivo o ceros
		if(numero >0){
			//aca van las lineas de codigo que se ejecutan si el numero es positivo
			contPositivos++;
			acumPositivos= acumPositivos+numero;
       }else if (numero <0){
		   //aca van las lineas de codigo que se ejecutan si el numero es negativo
	   }
	
	  else{
		  //aca van las lineas de codigo que se ejecutan si el numero
	   contCeros++;
	  }
	//me fijo si el numero es parse 
	if(numero %2 ==0){
		//aca va el codigo que se tiene que ejecutar
 contPares++;	
}
respuesta=prompt("Desea continuar");
	}while (respuesta1= "no");
	//Aca se realiza el calculode los promedios y la diferencias
	if (contNegativos!=0){
    promedioNeg =acumuNegativos/contNegativos
	}
   if (contPositivos!= 0){
     promedioPositivos=acumuPositivos/contPositivos;
   }
	
diferencia=contNegativo-contPositivos;
document.write("la suma de los negativos es "+negativo + "<br>");
document.write("la suma de los negativos "+positivo+"<br>");	
		
	





}//FIN DE LA FUNCIÓN