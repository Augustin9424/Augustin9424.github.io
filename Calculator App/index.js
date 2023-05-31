var number1 = "";
var number2 = "";
var equalSign = document.getElementById("equal");
var isNumber1Ready = false;

function formNumber(n){
    if(!isNumber1Ready){
        number1 += n
        document.getElementById("displayNumb").textContent = number1
    }
    else{
        number2 += n;
        document.getElementById("displayNumb").textContent = number2
    }
}

function sum(n1,n2){ return n1+n2}
function subtract(n1,n2){return n1-n2}
function multiply(n1,n2){return n1*n2}
function divide(n1,n2){return n1/n2}

function cal(p1,p2, operation){
    p2=Number(p2)
    result = operation(p1,p2)
    document.getElementById("displayNumb").textContent= result
    
}

function opSum(){
    number1 = Number(number1)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1, number2, sum)")
}

function opSub(){
    number1 = Number(number1)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1, number2, subtract)")
}

function opMul(){
    number1 = Number(number1)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1, number2, multiply)")
}

function opDiv(){
    number1 = Number(number1)
    isNumber1Ready = true;
    equalSign.setAttribute("onclick","cal(number1, number2, divide)")
}

function submitForm(){
    userName = document.getElementById("name").value
    userLastname = document.getElementById("lastname").value
    var user1 = new CreatUser(userName, userLastname)
    var greeting = "Hi " + user1.name + " " + user1.lastname + ", welcome to our webstie!"
    document.getElementById("displayTitle").textContent = greeting
}