/*----------begin addNumbers----------*/
function addNumbers(a, b)
{
    return a + b;
}    
console.log("Результат сложения: " + addNumbers(5, 3));
/*----------end addNumbers----------*/

/*----------begin addNumbersArrow----------*/
let addNumbersArrow = (a, b) => a + b;
console.log("Результат сложения: " + addNumbersArrow(4, 2));
/*----------end addNumbersArrow----------*/

/*----------begin multiplyArrayElements----------*/
function multiplyArrayElements(myArray)
{
    console.log("Перемноженный массив:");
    for (let i = 0; i < myArray.length; i++)
        console.log(myArray[i] * 2);
}

let myArray = [1, 2, 3];
console.log("Исоходный массив: ", myArray);
multiplyArrayElements(myArray);
/*----------end multiplyArrayElements----------*/

/*----------begin multiplyArrayElementsArrow----------*/
let multiplyArrayElementsArrow = myArray =>
    {
        console.log("Перемноженный массив:");
        for (let i = 0; i < myArray.length; i++)
            console.log(myArray[i] * 2);
    }

let myArray2 = [2, 4, 6];
console.log("Исходный массив: ", myArray2);
multiplyArrayElementsArrow(myArray2);
/*----------end multiplyArrayElementsArrow----------*/

/*----------begin checkEvenOdd----------*/
function checkEvenOdd(number)
{
    if (number % 2 == 0)
        return "Четное";
    return "Нечетное";
}

console.log("Число 2:", checkEvenOdd(2));
console.log("Число 3:", checkEvenOdd(3));
/*----------end checkEvenOdd----------*/

/*----------begin checkEvenOddArrow----------*/
let checkEvenOddArrow = number => 
{
    if (number % 2 == 0)
        return "Четное";
    return "Нечетное"; 
}

console.log("Число 5:", checkEvenOddArrow(5));
console.log("Число 6:", checkEvenOddArrow(6));
/*----------end checkEvenOddArrow----------*/