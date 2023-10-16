/*----------Задание 1: Средняя длина слов в массиве строк----------*/
let arrayStrings = ["apple", "banana", "cherry", "date", "elderberry"];
let sumWords = 0;

for (let i = 0; i < arrayStrings.length; i++)
{
    sumWords += arrayStrings[i].length;
}

let averageWordLength = sumWords / arrayStrings.length;

console.log("Текущий массив слов:", arrayStrings);
console.log("Средняя длина слова:", averageWordLength);

/*----------Задание 2: Наименьшее число в массиве----------*/
let numbers = [34, 12, 45, 7, 23, 9];
let minNumber = numbers[0];

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] < minNumber)
        minNumber = numbers[i];
}

console.log("Текущий массив:", numbers);
console.log("Наименьшее число в массиве:", minNumber);

/*----------Задание 3: Наименьшее число в массиве----------*/
let num = [2, 4, 6, 8, 10];
let sumSquare = 0;

for (let i = 0; i < num.length; i++)
{
    sumSquare += num[i] ** 2;
}

console.log("Текущий масси:", num);
console.log("Сумма квадратов чисел в массиве:", sumSquare);

