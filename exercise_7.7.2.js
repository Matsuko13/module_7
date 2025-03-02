function calculate (a,b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Ошибка';
    }
}

const numbers = [2, 3, '+'];
const result = calculate.apply(null, numbers);
console.log(result);
