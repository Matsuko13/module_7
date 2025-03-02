const users = [
    { name: 'Пётр', age: 10},
    { name: 'Василий', age: 12},
    { name: 'Павел', age: 20},
    { name: 'Михаил', age: 35},
    { name: 'Евгения', age: 21},
    { name: 'Константин', age: 15},
    { name: 'Александра', age: 6},
];

const years = users.filter(users => users.age >= 18);
const names = years.map(users => users.name);


console.log (years);

console.log (names);