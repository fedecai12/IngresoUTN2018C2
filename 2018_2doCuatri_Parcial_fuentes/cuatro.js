function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;
	
	numeroUno=parseInt(prompt("Ingrese numeroUno: "));
	numeroDos=parseInt(prompt("Ingrese numeroDos: "));
	numeroTres=parseInt(prompt("Ingrese numeroTres: "));
	
	
	if(numeroUno > numeroDos&&numeroUno>numeroTres )
	{
		mayor=numeroUno;
	}
	else
	{	
		if(numeroDos > numeroUno&&numeroDos> numeroTres )
		{		
			mayor=numeroDos; 
		}else{
			mayor=numeroTres;
		}	
	}
	
	if(numeroUno<numeroDos&&numeroUno<numeroTres)
	{
		menor=numeroUno
	}
	else
	{
		if(numeroDos<numeroUno&&numeroDos<numeroTres)
		{
		 menor=numeroDos;
		}
		else
		{
         menor=numeroTres;
		}
    }
    alert("El mayor es igual a: "+mayor);
    alert("El menor es igual a: "+menor);

}

