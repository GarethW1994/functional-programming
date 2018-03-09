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
    const callMethods = (index, method) => method(numbers);

    const makeMethodCalls = methods =>
        methods.map(callMethods)

    const outputs = makeMethodCalls(methods);

    buildTable(outputs);
};

const squareroot = (numberList) => {
    const sqrt = numberList.map((num) => Number(Math.sqrt(num).toFixed(0)));

    return { "sqrt": sqrt, process: "Math.sqrt()" };
};


const sum = (numberList) => {
    let total = 0;

    numberList.map((num) => {
        return total += num
    });

    return { "sum": total, process: "total += number" };
};

const avg = (numberList) => {
    const total = sum(numberList);
    const avg = Math.round(total.sum / numberList.length);

    return { "avg": avg, process: "sum / array.length" };
};

const max = (numberList) => {
    let highest = 0;
    const max = numberList.map((num, current) => {
        let cVal = num;
        let nVal = numberList[current + 1] || 0;

        return highest = Math.max(cVal, nVal);
    });

    return { "max": highest, process: "Math.max()" };
}

const buildTable = (content) => {
    const eachMethod = methods =>
        methods.map((index, method) => {
            let key = Object.keys(method);
            let output = method[key];
            let input = key[index] !== undefined ? key[index].charAt(0).toUpperCase() : "";
            // appendOutput(input, method.process, output);
        });
    eachMethod(content);
};

const appendOutput = (input, process, output) => {
    // $('.output').text("");
    $('.output').append("<tr>" + "<td>" + input + "</td>" + "<td>" + process + "</td>" + "<td>" + output + "</td>" + "</tr>");
};