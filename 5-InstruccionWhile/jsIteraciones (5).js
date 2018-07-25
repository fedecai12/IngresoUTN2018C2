function mostrar()
{

var sexo = (prompt("ingrese f ó m .")).toLowerCase;

while(!(sexo =="m"&& sexo =="f")){
    sexo = (prompt("Error.ingrese f ó m .")).toLocaleLowerCase;
   
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN