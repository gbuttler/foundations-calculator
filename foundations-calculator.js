let firstNumber = document.getElementById('a');

let secondNumber = document.getElementById('b');

let operator = document.getElementById('operator')


const result = () => {
    if (('span').attr('operator') == '+') 
        document.getElementById('result').innerHTML= (firstNumber,secondNumber) => firstNumber+secondNumber;
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
        if (document.getElementById('operator').length == 0 && document.getElementById('a').length == 0) {
            document.getElementById('a').innerHTML += '1';
        }     
        else if (document.getElementById('operator').length != 0 && document.getElementById('a').length != 0) {
            document.getElementById('b').innerHTML += '1';
        }
        else {
            alert('ERROR!')
        }
};

const testTwo = () => {
    document.getElementById('a').innerHTML += '2'; //use += to stop numbers overwriting themselves (I think)
}

const testThree = () => {
    document.getElementById('a').innerHTML += '3'; //use += to stop numbers overwriting themselves (I think)
}

const testFour = () => {
    document.getElementById('a').innerHTML += '4'; //use += to stop numbers overwriting themselves (I think)
}

const testFive = () => {
    document.getElementById('a').innerHTML += '5'; //use += to stop numbers overwriting themselves (I think)
}

const testSix = () => {
    document.getElementById('a').innerHTML += '6'; //use += to stop numbers overwriting themselves (I think)
}

const testSeven = () => {
    document.getElementById('a').innerHTML += '7'; //use += to stop numbers overwriting themselves (I think)
}

const testEight = () => {
    document.getElementById('a').innerHTML += '8'; //use += to stop numbers overwriting themselves (I think)
}

const testNine = () => {
    document.getElementById('a').innerHTML += '9'; //use += to stop numbers overwriting themselves (I think)
}

const testZero = () => {
    document.getElementById('a').innerHTML += '0'; //use += to stop numbers overwriting themselves (I think)
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


