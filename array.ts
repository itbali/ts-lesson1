// 1. map - итерированное по массиву и возврат нового массива. Не изменяет исходный массив
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((item, index, arr) => item * 2);
console.log(newArr); //[ 2, 4, 6, 8, 10 ]

// 2. filter - итерированное по массиву и возврат нового массива с элементами, которые прошли проверку. Не изменяет исходный массив
let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr2.filter(item => item % 2 === 0); //четные числа
console.log(newArr2); //[ 2, 4 ]

// 3. forEach - итерированное по массиву и выполнение функции для каждого элемента. Не изменяет исходный массив
let arr4 = [1, 2, 3, 4, 5];
arr4.forEach(item => console.log(item)); //1 2 3 4 5

// 4. reduce - итерированное по массиву и возврат единственного значения. Не изменяет исходный массив
let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((acc, item, index, arr) => acc + item, 0);
console.log(sum); //15

// 5. sort - сортировка элементов массива. Изменяет исходный массив. (toSorted - обновленный вариант)
let arr5 = [{name: "Jhom", age: 20}, {name: "Marrie", age: 16}];
arr5.sort();
console.log(arr5); //[ 1, 2, 3, 4, 5 ]

// 6. reverse - изменяет порядок элементов массива на обратный. Изменяет исходный массив
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6); //[ 5, 4, 3, 2, 1 ]

// 7. join - собирает массив в строку
let arr7 = ['Hello', "World"];
let joined = arr7.join("")
console.log(joined)

// 8. find - возвращает первый элемент, который прошел проверку. Возвращает undefined, если ничего не найдено
let arr8 = [1, 2, 3, 4, 5];
let result3 = arr8.find(item => item > 3);
console.log(result3?.toString()); //4

// 8. findIndex - возвращает индекс первого элемента, который прошел проверку. Возвращает -1, если ничего не найдено
let arr9 = [1, 2, 3, 4, 5];
let result4 = arr9.findIndex(item => item > 3);
console.log(result4); //3

// 9. some - проверяет, проходит ли хотя бы один элемент проверку. Возвращает true или false
let arr10 = [1, 2, 3, 4, 5];
let result = arr10.some(item => item > 3);
console.log(result); //true

// 10. every - проверяет, проходят ли все элементы проверку. Возвращает true или false
let arr11 = [1, 2, 3, 4, 5];
let result2 = arr11.every(item => item > 3);
console.log(result2); //false

// 11. includes - проверяет, содержит ли массив указанный элемент. Возвращает true или false
let arr12 = [1, 2, 3, 4, 5];
let result5 = arr12.includes(3);
console.log(result5); //true

// 12. push - добавляет элемент в конец массива. Изменяет исходный массив. Возвращает новую длину массива
let arr13 = [1, 2, 3, 4, 5];
arr13.push(6);
console.log(arr13); //[ 1, 2, 3, 4, 5, 6 ]

// 13. pop - удаляет последний элемент массива. Изменяет исходный массив. Возвращает удаленный элемент
let arr14 = [1, 2, 3, 4, 5];
let deleted = arr14.pop();
console.log(deleted); //5
console.log(arr14); //[ 1, 2, 3, 4 ]

// 14. shift - удаляет первый элемент массива. Изменяет исходный массив. Возвращает удаленный элемент
let arr15 = [1, 2, 3, 4, 5];
let deleted2 = arr15.shift();
console.log(deleted2); //1
console.log(arr15); //[ 2, 3, 4, 5 ]

// 15. unshift - добавляет элемент в начало массива. Изменяет исходный массив. Возвращает новую длину массива
let arr16 = [1, 2, 3, 4, 5];
arr13.unshift(0);
console.log(arr16); //[ 0, 1, 2, 3, 4, 5 ]


// 16. slice - возвращает новый массив, содержащий копию части исходного массива. Не изменяет исходный массив
let arr17 = [1, 2, 3, 4, 5];
let newArr3 = arr17.slice(1, 3);
console.log(newArr3); //[ 2, 3 ]


// 17. splice - добавляет или удаляет элементы в массиве. Изменяет исходный массив. Возвращает массив удаленных элементов (toSpliced - обновленный вариант)
let arr18 = [1, 2, 3, 4, 5];
let deleted3 = arr18.splice(1, 2);
console.log(deleted3); //[ 2, 3 ]
console.log(arr18); //[ 1, 4, 5 ]