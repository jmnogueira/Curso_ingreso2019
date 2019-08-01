function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var nuemero;

	do
	{
		numero=prompt("ingrese un numero:");
		while(isNaN(numero))
		{
			numero=prompt("ingrese un numero");
		}
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;
		respuesta=prompt("desea seguir s/n:");
		while(respuesta!="s" || respuesta !="n")
		{
			respuesta=prompt("error. ingrese s o n");
		}
	} while(respuesta=="s")


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN