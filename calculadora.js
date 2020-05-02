const args = process.argv.slice(2);
​
const num1 = parseFloat(args[0]);
const oper = args[1];
const num2 = parseFloat(args[2]);

switch (oper) {
    case "mas":
    result = 'Suma:' + parseFloat(num1 + num2);
    break;

    case "menos":
    result = 'Resta:' + parseFloat(num1 - num2);
    break;

    case "entre":
    result = 'División:' + parseFloat(num1 / num2);
    break;
}

console.log(result);