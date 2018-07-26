function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	do {
	   numero=parseInt(prompt("Ingrese numero"));
	   acumulador=acumulador+numero	
	   contador++	
	   respuesta= prompt("Desea continuar ingresando: ");

	} 
	 while (respuesta=="si");
	 
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN