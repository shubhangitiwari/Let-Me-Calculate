function f1(clicked){
    let s = clicked.value;
    document.getElementById("user_input").value += s;
}

function fclear()
{
    document.getElementById("user_input").value="";
}

function fback()
{
    let s=document.getElementById("user_input").value;
    s = s.substring(0,s.length - 1);
    document.getElementById("user_input").value=s;
}

function feq()
{
    let s = document.getElementById("user_input").value;
    if(s.includes("!"))
    {
        let f = s.substring(0,s.length - 1);
        f = parseFloat(f);
        let fact = 1;
        while(f > 0)
        {
            fact*=f;
            f--;
        }
        document.getElementById("user_input").value=fact;
    }
    else if(s.includes("^"))
    {
        let i = s.indexOf("^");
        let a = s.substring(0,i);
        a = parseFloat(a);
        alert(a);
        let b = s.substring(i+1, s.length);
        b = parseFloat(b);
        let p=1;
        while(b>0)
        {
            p*=a;
            b--;
        }
        document.getElementById("user_input").value=p;
    }
    else if(s.includes("sqrt"))
    {
        let temp = s;
        temp = temp.replace("sqrt","");
        temp = temp.replace("(","");
        temp = temp.replace(")","");
        temp = parseFloat(temp);
        res = Math.sqrt(temp);
        document.getElementById("user_input").value=res;
    }
    else if(s.includes("log"))
    {
        let temp = s;
        temp = temp.replace("log","");
        temp = temp.replace("(","");
        temp = temp.replace(")","");
        temp = parseFloat(temp);
        res = Math.log(temp);
        document.getElementById("user_input").value=res;
    }
    else if(s.includes("sin"))
    {
        let temp = s;
        temp = temp.replace("sin","");
        temp = temp.replace("(","");
        temp = temp.replace(")","");
        temp = parseFloat(temp);
        res = Math.sin(temp);
        document.getElementById("user_input").value=res;
    }
    else if(s.includes("cos"))
    {
        let temp = s;
        temp = temp.replace("cos","");
        temp = temp.replace("(","");
        temp = temp.replace(")","");
        temp = parseFloat(temp);
        res = Math.cos(temp);
        document.getElementById("user_input").value=res;
    }
    else{
    let res = eval(s);
    document.getElementById("user_input").value=res;
    }
}