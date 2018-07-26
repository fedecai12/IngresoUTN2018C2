function mostrar()
{
    var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta="si";
   do {
	numero= parseInt(prompt("Ingrese numero"));
	if(numero >=0){
	positivo=positivo+numero;
	 
	 } 
	 
	 else{
	 negativo=negativo*numero;
	  contador++;
	 } 
	  respuesta=prompt("Desea seguir ingresando: ");
      respuesta=respuesta.toLocaleLowerCase();
}
while(respuesta=="si");

document.getElementById('suma').value=positivo;
if(contador==0){
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN