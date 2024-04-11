



let firstNumber = document.getElementById('a');

let secondNumber = document.getElementById('b');

let operator = document.getElementById('operator');




function result() {
    if (document.getElementById('operator').innerHTML == '+') {
        console.log(firstNumber, (typeof firstNumber));
        document.getElementById('result').innerHTML = firstNumber + secondNumber;
    }
    else if (document.getElementById('operator').innerHTML == '-') {
        document.getElementById('result').innerHTML = firstNumber - secondNumber;
    }
    else if (document.getElementById('operator').innerHTML == '*') {
        document.getElementById('result').innerHTML = firstNumber * secondNumber;
    }
    else if (document.getElementById('operator').innerHTML == '/') {
        document.getElementById('result').innerHTML = firstNumber / secondNumber;
    }
    else {
        alert('ERROR!');
    }
}

var continueMaths = () => {
    if (document.getElementById('result').innerHTML.length == 0 ) {
        alert('You have no maths to continue!');
    }
    else {
        let tmp = document.getElementById('result').innerHTML
        document.getElementById('a').innerHTML = document.getElementById('result').innerHTML
        document.getElementById('b').innerHTML = ''
        document.getElementById('operator').innerHTML = ''
        firstNumber = Number(tmp);
        console.log('firstnumber is', firstNumber, 'tmp is', tmp, (typeof tmp));
       
    }
}



const testOne = () => {

        const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;
        

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '1';
            firstNumber = Number(document.getElementById('a').innerHTML); //Used the Number function to convert 'a' into a number
            console.log('first number is', firstNumber, 'operator length is', operator_length);
        }  
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '1';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
};

const testTwo = () => {
        const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '2';
            firstNumber = Number(document.getElementById('a').innerHTML);
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '2';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
}

const testThree = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '3';
            firstNumber = Number(document.getElementById('a').innerHTML);
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '3';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
}

const testFour = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '4';
            firstNumber = Number(document.getElementById('a').innerHTML);
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '4';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
}

const testFive = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '5';
            firstNumber = Number(document.getElementById('a').innerHTML);
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '5';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
}

const testSix = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '6';
            firstNumber = Number(document.getElementById('a').innerHTML);
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '6';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
}

const testSeven = () => {
        const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '7';
            firstNumber = Number(document.getElementById('a').innerHTML);
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '7';
            secondNumber = Number( document.getElementById('b').innerHTML);
        }
        else {
            alert('ERROR!')
        }
}

const testEight = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
    const a_length = document.getElementById('a').innerHTML.length || 0;

    console.log(operator_length, a_length)

    if (operator_length == 0) {
        document.getElementById('a').innerHTML += '8';
        firstNumber = Number(document.getElementById('a').innerHTML);
    }     
    else if (operator_length != 0 && a_length != 0) {
        document.getElementById('b').innerHTML += '8';
        secondNumber = Number( document.getElementById('b').innerHTML);
    }
    else {
        alert('ERROR!')
    }
}

const testNine = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
    const a_length = document.getElementById('a').innerHTML.length || 0;

    console.log(operator_length, a_length)

    if (operator_length == 0) {
        document.getElementById('a').innerHTML += '9';
        firstNumber = Number(document.getElementById('a').innerHTML);
    }     
    else if (operator_length != 0 && a_length != 0) {
        document.getElementById('b').innerHTML += '9';
        secondNumber = Number( document.getElementById('b').innerHTML);
    }
    else {
        alert('ERROR!')
    }
}

const testZero = () => {
    const operator_length = document.getElementById('operator').innerHTML.length || 0;
    const a_length = document.getElementById('a').innerHTML.length || 0;

    console.log(operator_length, a_length)

    if (operator_length == 0) {
        document.getElementById('a').innerHTML += '0';
        firstNumber = Number(document.getElementById('a').innerHTML);
    }     
    else if (operator_length != 0 && a_length != 0) {
        document.getElementById('b').innerHTML += '0';
        secondNumber = Number( document.getElementById('b').innerHTML);
    }
    else {
        alert('ERROR!')
    }
}

const testAdd = () => {
    document.getElementById('operator').innerHTML += '+'; //use += to stop numbers overwriting themselves (I think)
}

const testSubtract = () => {
    document.getElementById('operator').innerHTML += '-'; //use += to stop numbers overwriting themselves (I think)
}

const testMultiply = () => {
    document.getElementById('operator').innerHTML += '*'; //use += to stop numbers overwriting themselves (I think)
}

const testDivide = () => {
  document.getElementById('operator').innerHTML += '/'; //use += to stop numbers overwriting themselves (I think)
}
