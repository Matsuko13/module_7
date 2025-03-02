const person = {
    name: 'Жора',
    ade: '15'
};

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.ade}`);
}


printInfo.call(person);
