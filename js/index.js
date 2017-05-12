// var greetings = 'Hello world';
// document.write (greetings);
// var userName = prompt('Your name');
// var greetings = ('Hello ') + userName;
// document.write (greetings);
// document.write('<br>');
// var yourAge = Number(prompt('Your age'));
// var nextAge = yourAge + 1;
// document.write ('You will be soon ' + nextAge);

// var first = Number(prompt('first number'));
// var second = Number(prompt('Second number'));

// function sum(a, b){
//     var result = a * b;
//     return result;
// }

// var multiply = sum(first, second);
// document.write('Multiply = ' + multiply);

// var korin = Number(prompt("Enter your number:"));

// var result = Math.sqrt(korin);
// document.write('Корінь = ' + result);


// http://yukhym.com/uk/matematika/kvadratne-rivnyannya.html

var firstNumber = Number(prompt('Enter your first number'));
var secondNumber = Number(prompt('Enter your second number'));
var thirdNumber = Number(prompt('Enter your third number'));
               // 1  2  3
function deskrim (a, b, c){
    var resultD = Math.pow(b,2) - 4 * a * c;
    var korinD = Math.sqrt(resultD);
    
    
    var x1 = (-b + korinD) /( 2 * a);
    var x2 = (-b - korinD) / (2 * a);
    var result = '<h3>' + 'Розв\'язком квадратного рівняння ( ' + firstNumber + 'x' + '<sup>' + '2' + "</sup> )" + ' + ( ' + secondNumber + 'x )' + ' + ( ' + thirdNumber + ' ) будуть такі значення: x1 = ' + x1 + ' та x2 = ' +x2 + '</h3>';
    return result;
}

var sum = deskrim(firstNumber, secondNumber, thirdNumber);
document.write(sum);