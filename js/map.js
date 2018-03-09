var someArray = [4, 9, 16],
    mysum = 0,
    avg = 0,
    highest = 0,
    sqrtArray = [];

// map function
sqrtArray = someArray.map(Math.sqrt);
someArray.map((num) => { mysum = mysum + num });
avg = Math.round(mysum / someArray.length);

someArray.map(getMax);

function getMax(num, current) {
    let cVal = num;
    let nVal = someArray[current + 1] || 0;

    highest = Math.max(cVal, nVal);
}

// $('.output').append("<tr><td>" + "Math.sum()" + "</td></tr>");

function appendOutput(input, process, output) {
    console.log(input, process, output)
    $('.output').append("<tr>" + "<td>" + input + "</td>" + "<td>" + process + "</td>" + "<td>" + output + "</td>" + "</tr>");
}

appendOutput("Sqrt", "Math.sqrt()", sqrtArray);
appendOutput("Sum", "sum += num", mysum);
appendOutput("Avg", "sum / array.length", avg);
appendOutput("Max", "Math.max()", highest);


$('#process').on('click', () => {
    // get input
    const numbers = $('#csnumbers').val();
    const operations = $('input[name="operations"]:checked');

    // check if the input is valid
    const valid = onInputCheck(numbers) ? true : alert("Something Went Horribly Wrong!");

    // if the input was valid split the numbers
    const splitList = valid == true ? splitNumbers(numbers) : false;

    // if the numbers has been split then convert each number to integer
    const newNumericList = splitList.length > 0 ? splitList.map(convertNumeric) : false;

    // map the selected operations
    const currentOperations = onGetOperations(operations);

    // check if a operation was selected
    const selectedOperations = currentOperations["length"] > 0 ? processOperation(currentOperations, newNumericList) : alert('Please Select A Operation');
});

const onGetOperations = (checkboxes) => {
    const getValue = (index, operation) => operation["value"];
    const getOperationValue = operations =>
        operations.map(getValue)
    const operationValues = getOperationValue(checkboxes);

    return operationValues;
}

const onInputCheck = (listOfNumbers) => {
    const validate = numbers =>
        !numbers ? false :
        !numbers.includes(",") ? false : true
    return validate(listOfNumbers);
};

const splitNumbers = (listOfNumbers) => {
    let splitNumericList = listOfNumbers.split(",");
    return splitNumericList;
};

const convertNumeric = (eachNumber) => Number(eachNumber);

const processOperation = (listOfOperations, listOfNumbers) => {
    const callRespectiveFunc = (index, value) => eval(value);

    const checkFunc = operation =>
        operation.map(callRespectiveFunc);

    let newFunc = checkFunc(listOfOperations);

    callRespectiveFunctions(newFunc, listOfNumbers)
}

const callRespectiveFunctions = (methods, numbers) => {
    let value = methods[0];

    console.log(value(numbers))
}

const squareroot = (numberList) => {
    console.log(numberList)
    console.log(Math.max(numberList))
}

const sum = () => {
    console.log('sum method running')
}