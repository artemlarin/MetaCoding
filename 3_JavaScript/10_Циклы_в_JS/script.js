/*----------Задание 1----------*/
for (let i = 0; i <= 10; i++)
{
    console.log(`${i} * ${i} = ${i * i}`);
}

/*----------Задание 2----------*/
let sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multipliedArray= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Исходный массив:", sourceArray);
console.log("Перемноженный массив:");
for (let i = 0; i < multipliedArray.length; i++)
{
    console.log(multipliedArray[i] * 2);
}

/*----------Задание 3----------*/
let number = 1;
let sum = 1;

console.log(`${sum}`);

while (number++ <= 10)
{
    sum *= 2;
    console.log(`${sum}`);
}
