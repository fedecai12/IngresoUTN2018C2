function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
 while(!(numero >=0 && numero <=10)) {
	numero = parseInt(prompt("Error . ingrese un número entre 0 y 10."));
 }
 document.getElementById("numero")=numero
}//FIN DE LA FUNCIÓN