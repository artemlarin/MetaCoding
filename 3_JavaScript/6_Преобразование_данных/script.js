let name = 'Notebook';
let data = 31;
let age = 24;
let truth = true;
let myArray = [1, 2, 3, 4, 5];

let number = 48;
let company = 'samsung';
let originalNumber = 12;

data = String(data);
name = parseInt(name);
truth = parseInt(truth);
age = Boolean(age);

let stringNumber = company + number;
let multiplyingNumbers = number * 3;
let compareBooleanValue = age == name;
let original = data > originalNumber;

console.log('Преобразуйте число в строку =>', data);
console.log('Тип:',typeof(data));
console.log('Преобразуйте строку в число =>', name);
console.log('Тип:',typeof(name));
console.log('Преобразуйте булевое значение в число =>', truth);
console.log('Тип:',typeof(truth));
console.log('Преобразуйте число в булевое значение =>', age);
console.log('Тип:',typeof(age));

console.log('Сложите строку и число:', stringNumber);
console.log('Умножьте число на 3:', multiplyingNumbers);
console.log('Сравните булевое значение с числом и сохраните результат в переменной:', compareBooleanValue);
console.log('Сравните преобразованное число с оригинальным числом и выведите результат на экран:', original);