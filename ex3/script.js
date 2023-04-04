function solution(){
    let number1 = Number(prompt("Write a first number:", '')); 
    let character = prompt("Write a symbol (+,-,*,/):", ''); 
    let number2 = Number(prompt("Write a second number:", '')); 

    if (character === '*'){
        result = number1 * number2;
    }
    else if (character === '+'){
        result = number1 + number2;
    }
    else if (character === '-'){
        result = number1 - number2;
    }
    else if (character === '/'){
        result = number1 / number2;
    }
    else{
        result = "Error!";
    }
    return result;
}

alert(solution());