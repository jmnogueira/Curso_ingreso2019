function mostrar()
{
    var num1;
    var num2;
    var resultado;

    num1=prompt(num1);
    num2=prompt(num2);

    if(num1==num2)
    {
        alert(num1+num2)
    }
        else
        if(num1>num2)
        {
            resultado=num1-num2;
        }
            if(num1<num2)
            {
                num1=parseInt(num1);
                num2=parseInt(num2);
                resultado=num1+num2;
            }
                else(resultado>10)
                {
                    alert("la suma es " +resultado + "supero el 10 " );
                }
    

}
