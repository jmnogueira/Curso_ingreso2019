function mostrar()
{
    var numero;
    var letra;
    var respuesta=confirm("clickea aceptar para seguir ingresando datos")
    var resto;
    var contadordepar=0;
    var contadordeimpar=0;
    var cantidadcero=0;
    var sumavalores=0;
    var sumanegativos=0;
    var contadoraux=0;
    var minimo=100;
    var maximo=-100;

    while (respuesta==true)
    {
       

        numero=prompt(numero);
        while(!(numero>-100 && numero<100)){
            alert("numero incorrecto ingrese otro numero");
            numero=prompt(numero);
            
        }
        
        letra=prompt(letra);

        respuesta=confirm("clickea aceptar para seguir ingresando datos");

        resto=numero%2;


        if(numero==0){
            cantidadcero++;
        }
        if(resto==0){
    
            contadordepar++;

        }
        else 
            contadordeimpar++;

        if(numero>=0){
            numero=parseInt(numero);
            sumavalores=sumavalores+numero;
            contadoraux++;


        }
        
        else{
        numero=parseInt(numero);
        sumanegativos=sumanegativos+numero;
        }
        if(numero>maximo){
            maximo=numero;
        }
        if(numero<minimo){
            minimo=numero;
        }

     


    }
    
 
    document.write("contador par es " +contadordepar,"contador impar es"+contadordeimpar,"contador cero es" +cantidadcero,"promedio es " +sumavalores/contadoraux,"suma neg es " +sumanegativos,"el minimo es "+minimo,"el maximo es" +maximo);


    


}   
