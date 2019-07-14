function mostrar()
{
    var num1;
    var num2;
    var resultado;

    num1=prompt(num1);
    num2=prompt(num2);
    
    if(num1==num2)
    {
       alert(num1+num2); 
    }
        else
        if(num1>num2)
        {
            num1/num2
        }
            else(num1<num2)
            {
                num1=parseInt(num1);
                num2=parseInt(num2);
                resultado=num1+num2;
            }
                if(resultado<50)
                {
                    alert("la suma es " +resultado + "es menor a 50 ")
                }


}
