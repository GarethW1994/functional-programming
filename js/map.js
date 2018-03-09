var someArray = [4, 9, 16],
    sum = 0,
    avg = 0,
    highest = 0,
    sqrtArray = [];

// map function
sqrtArray = someArray.map(Math.sqrt);
someArray.map((num) => { sum = sum + num });
avg = Math.round(sum / someArray.length);

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
appendOutput("Sum", "sum += num", sum);
appendOutput("Avg", "sum / array.length", avg);
appendOutput("Max", "Math.max()", highest);


$('#process').on('click', () => {
    // get input
    const numbers = $('#csnumbers').val();
    $('input[name="operations"]:checked').each(function() {
        this.value
    });

    console.log(operations)
        // check if the input is valid
    const valid = onInputCheck(numbers) ? true : alert("Something Went Horribly Wrong!");

    // if the input was valid split the numbers
    const splitList = valid == true ? splitNumbers(numbers) : false;

    // if the numbers has been split then convert each number to integer
    const newNumericList = splitList.length > 0 ? splitList.map(convertNumeric) : false;

    // determine which check box was clicked

});

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