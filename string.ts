//самый популярные методы строк:

// 1. trim() - удаляет пробелы в начале и в конце строки
let str = "   Hello world!   ";
console.log(str.trim()); //Hello world!

// 2. includes() - проверяет, содержит ли строка указанную подстроку
let str2 = "Hello world!";
console.log(str2.includes("world")); //true

// 3. startsWith() - проверяет, начинается ли строка с указанной подстроки
let str3 = "Hello world!";
console.log(str3.startsWith("Hello")); //true

// 4. indexOf() - возвращает индекс первого вхождения указанной подстроки
let str4 = "Hello world!";
console.log(str4.indexOf("wo")); //6

// 5. split() - разбивает строку на массив подстрок по указанному разделителю
let str5 = "Hello world!";
console.log(str5.split(" ")); //[ 'Hello', 'world!' ]

// 6. toUpperCase() / toLowerCase() - преобразует строку в верхний / нижний регистр
let str6 = "Hello world!";
console.log(str6.toUpperCase()); //HELLO WORLD!
console.log(str6.toLowerCase()); //hello world!

// 7. replace() - заменяет подстроку на указанную
let str8 = "Hello world world!";
console.log(str8.replace("world", "John")); //Hello John!