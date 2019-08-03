function mostrar()
{
    var nota;
    var sexo;
    var sexoAux;
    var sexoV
    var alumnos=0
    var acumulador=0
    var notaMin=0
    var notaMax;
    var contador=0

    while(alumnos<5)
    {
        
        nota=prompt("ingrese nota");
        while (nota<0 || nota>10)
        {
            nota=prompt("reingrese nota");
        }
        nota=parseInt(nota);
        acumulador=acumulador+nota
        sexo=prompt("ingrese sexo");
        
        while (sexo!="f" && sexo!="m")
        {
            sexo=prompt("reingrese sexo");
    
        }
        if (alumnos==0)
        {
            notaMin=nota;
            sexoAux=sexo;
        }
        else if(nota<notaMin)
        {
            notaMin=nota;
            sexoAux=sexo;
            if(nota>6)
            {
                notaMax=nota;
                sexoV=sexo
            }
        }
        

        alumnos++;
        
        
        
        
    

    }    
     //fin del while principal
    
    

    
      
    alert("el promedio de las notas es"+acumulador/5);    
    alert(" la nota mas baja es " +notaMin+ " el sexo es "+sexoAux);
    alert()
}
