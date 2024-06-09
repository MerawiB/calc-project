var d1=new Date();
document.getElementById("demo1").innerHTML=d1.toDateString();//only date
        function pow()
         {
            calc.display.value=Math.pow(calc.display.value,2);
         }
         function sqrt()
         {
            calc.display.value=Math.sqrt(calc.display.value,2);
         }
         function backspc()
         {
            calc.display.value=calc.display.value.substr(0,calc.display.value.length-1);
         }
         function pi()
         {
            calc.display.value=Math.PI;
         }
         function e()
         {
            calc.display.value=Math.E;
         }
         function fact()
         {
            var i,num,f;
            f=1;
            num=calc.display.value;
            for(i=1;i<=num;i++)
            {
                f=f*i;
            }
            i=i-1;
            calc.display.value=f;
         }
         function sin()
         {
            calc.display.value=Math.sin(calc.display.value);
         }
         function cos()
         {
            calc.display.value=Math.cos(calc.display.value);
         }
         function tan()
         {
            calc.display.value=Math.tan(calc.display.value);
         }
         function log()
         {
            calc.display.value=Math.log10(calc.display.value);
         }
      