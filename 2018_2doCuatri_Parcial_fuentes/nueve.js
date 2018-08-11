/*En una tienda se ingresan los datos de los cliente (nombre , sexo, estado civil{soltero, casado,viudo},cantidad de productos e importe total de la compra)
Necesitamos saber:
a- el nombre de la persona que más cantidad de productos compró.
b- de los solteros, el  sexo del que más gasto y el que menos gasto.
c-el importe  y nombre de la primer mujer en comprar.
d- el promedio de gasto de los viudos.
*/

function mostrar()
{
 var nombre;
 var sexo;
 var estadoCivil;
 var cantidad;
 var importeTotal;
 var respuesto="n";
 var mayorCantidad;
 var mayorCantidadNombre;
 var mayor
 var flag=0;
 var flag1=0;
 var masGasto;
 var menosGasto;
 var masGastoSexo;
 var menosGastoSexo;
 
 
 while(respuesta!="n")
  {
   nombre=prompt("Ingrese nombre: ");
   sexo=prompt("Ingrese sexo: ");
   while(sexo!="f"&& sexo!="m")
   {
	   sexo=("ingrese sexo: ");
   }
    estadoCivil=prompt("Ingrese estadoCivi ");
  }
   cantidad=parseInt(prompt("Ingrese cantidad "));
   while(cantida<0 &&isNan(cantidad))
   {
	cantidad=parseInt(prompt("Ingrese cantidad "));
   }
	importeTotal=parseInt(prompt("Ingrese importeTotal"));
    
  if(flag==0)
  {
	flag=1
	mayorCantidad=cantidad;
	mayorCantidadNombre=nombre;
  }
  if(estadoCivil=="soltero"&&flag1!=0)
  {
   
  }
} 
