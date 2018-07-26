function mostrar()
{

	
	// declarar variables
	var contador=0
	var numero
	var respuesta="si";
	var maximo
	var minimo
	do{
	 numero=parseInt(prompt("Ingrese numero"));
	 contador++;
     if(contador ==1){
		 maximo=numero;
		 minimo=numero;
     }
      if(numero>maximo){
		 maximo=numero; 
	  }
	 if(numero<minimo){
		minimo=numero; 
	 }
	  respuesta=prompt("Desea seguir ingresando: ");
	 } 
	 while(respuesta=="si")
     document.getElementById('maximo').value=maximo;
     document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN