const arr = [1, 8, 2, 3, 9, 1, 5, 9, 7, 8, 4, 2, 6, 3, 9, 5, 6];

const arrNew = Array.from(new Set(arr));

const arrSorted = arrNew.filter(() => {
    return arrNew.sort();
})

console.log(arrNew);