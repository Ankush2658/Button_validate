function incrementValue1()
    {
        var value = parseInt(document.getElementById('number1').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number1').value = value;
    }

    function incrementValue2()
    {
        var value = parseInt(document.getElementById('number2').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number2').value = value;
    }

    function incrementValue3()
    {
        var value = parseInt(document.getElementById('number3').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('number3').value = value;
    }

    function validate()
    {
        var val1=document.getElementById(incrementValue1());
        var val2=document.getElementById(incrementValue2());
        var val3=document.getElementById(incrementValue3());  

        val1 = val1+1;
        val2 = val2+1;
        val3 = val3+1; 

    //     console.log(val1);
    //     console.log(val2);
    //     console.log(val3);
    // 
    }

    // function reset()
    // {
    // document.getElementById("number1").value='0';
    // document.getElementById("number2").value='0';
    // document.getElementById("number3").value='0';
    // }

    // function StorePosition()
    // {
    //     document.getElementById('number1').innerHTML.indexOf(incrementValue1());
        
    //     document.getElementById('number2').innerHTML.indexOf(incrementValue2());
        
    //     document.getElementById('number3').innerHTML.indexOf(incrementValue3());
    // }
    // 