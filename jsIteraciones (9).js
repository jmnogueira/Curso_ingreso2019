function mostrar()
{
	var numero;
	var minimo;
	var maximo;
	var respuesta;
	var esPrimeraInteracion=true

	do
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if (esPrimeraInteracion===true)
		{
			maximo=numero;
			minimo=numero;
			esPrimeraInteracion=false;
		}		
		else if (numero>maximo)
		{
			maximo=numero;
		}
		else if(numero<minimo)
		{
			minimo=numero;
		}
		respuesta=confirm("desea continuar");
		

	}while(respuesta)

	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;
	
}	



//FIN DE LA FUNCIÓN