let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Текущий массив:',numbers);
console.log('Выведите в консоль значение третьего элемента массива:',numbers[2]);

console.log('Текущий массив:',numbers);
numbers[4] = 15;
console.log('Измените значение пятого элемента массива на 15',numbers);

let currentMassiv =
[
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

let matrix =
[
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

console.log('Текущий многомерный массив:',currentMassiv);
console.log('Выведите в консоль второй элемент первого вложенного массива из matrix:',matrix[0][1]);
console.log('Текущий многомерный массив:',currentMassiv);
matrix[1][2] = 10;
console.log('Измените значение третьего элемента второго вложенного массива из matrix на 10',matrix);
