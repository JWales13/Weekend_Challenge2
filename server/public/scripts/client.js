console.log('js sourced');
$(document).ready(readyNow);
function readyNow (){
    console.log('jQuery Sourced');
    $('.addition').on('click',additionFunction);
    $('.subtraction').on('click',subtractionFunction);
    $('.multiply').on('click',multiplyFunction);
    $('.divide').on('click', divisionFunction);
    $('.getResults').on('click', postData);
    $('.clearButton').on('click', clearEverything);
} //end readyNow

var operator = "";
var num1 = 0;
var num2 = 0;
package = {};
var result = 0;
answer = {}


function additionFunction (){
    operator = "+";
    console.log(operator);
    return this.operator;
}

function subtractionFunction (){
    operator = "-";
    console.log(operator);
    return this.operator;
}

function multiplyFunction(){
    operator = "*";
    console.log(operator);
    return this.operator;
}

function divisionFunction(){
    operator = "/";
    console.log(operator);
    return this.operator;
}

function postData(){
    var numberOne = $('#firstNumber').val();
    var numberTwo = $('#secondNumber').val();

    var package = {
        num1: numberOne,
        num2: numberTwo,
        operation: operator
    }//end contructor

    console.log('package: ' , package)
    $.ajax({
        method: 'POST',
        url: '/do-math-stuff',
        data: {package},
        success: function(response){
            console.log('the server got the data', response);
        }//end success
    })//end ajax post
    console.log('something happened');

    $.ajax({
        method: 'GET',
        url: '/do-math-stuff',
        data: {answer},
        success: function(response){
            result = response.number
            console.log(result);
            appendResult(result);
            
        }//end success function
}) //end ajax result
// appendResult(result);

}//end postData
function appendResult(result){
    $('.displayResults').append('<p>the result is:' + result  + '</p>')
    $('#clearButton').on('click', clearEverything);
    $('input').val(' ');
    
};
function clearEverything(){
    $('input').empty();
    $('.displayResults').replaceWith('<p> </p>')
}

