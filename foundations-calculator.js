let firstNumber = document.getElementById('a');

let secondNumber = document.getElementById('b');

let operator = document.getElementById('operator')


const result = () => {
    if (document.getElementById('operator').innerHTML == '+') 
        document.getElementById('result').innerHTML= (firstNumber,secondNumber) => firstNumber+secondNumber;
    console.log(firstNumber)
    console.log(secondNumber)
};

{/* <div id="myID"></div>

if($("div").attr("id") == "myID")
{
    //do stuff
} */}

let add = (a,b) => a+b;

let subtract = (a,b) => a-b;

let multiply = (a,b) => a*b;

let divide = (a,b) => a/b;

// let operator = add; 



let operate = (a,b,c) => c(a,b);

// if($('span').text().length == 0){
//     console.log('No Text');
//   }
//   else{
//     console.log('Has Text');
//   }


const testOne = () => {

        const operator_length = document.getElementById('operator').innerHTML.length || 0;
        const a_length = document.getElementById('a').innerHTML.length || 0;

        console.log(operator_length, a_length)

        if (operator_length == 0) {
            document.getElementById('a').innerHTML += '1';
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '1';
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
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '2';
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
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '3';
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
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '4';
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
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '5';
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
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '6';
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
        }     
        else if (operator_length != 0 && a_length != 0) {
            document.getElementById('b').innerHTML += '7';
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
    }     
    else if (operator_length != 0 && a_length != 0) {
        document.getElementById('b').innerHTML += '8';
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
    }     
    else if (operator_length != 0 && a_length != 0) {
        document.getElementById('b').innerHTML += '9';
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
    }     
    else if (operator_length != 0 && a_length != 0) {
        document.getElementById('b').innerHTML += '0';
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
