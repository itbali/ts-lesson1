let age : number = 20;
let firstName:string = 'John';
let isMarried: boolean = false;

// массивы
// let names: string[] = ['John', 'Sara', 'Bill'];
let names: Array<string> = ['John', 'Sara', 'Bill', "Alex"];
// кортежи
let person: [string, number] = ["John", 20]


// перечисления
enum COLOR {
    Red,
    Yellow,
    Green
}
let backendColor = Math.floor(Math.random()*3)
if(backendColor === COLOR.Red) {
    console.log("stop")
}

// специальные типы
let someValue: any = 'hello';
someValue = 20
someValue = false

let value: unknown = 'hello';
let value2: string = value;

// void: используется для указания, что функция не возвращает значение
function sayHello(): void {
    console.log('Hello');
}

// never: используется для указания, что функция не возвращает значение и не завершается
function throwError(): never {
    throw new Error('Error');
}

function returnStringFunc(id: string):string {
    return id.toString()
}

// null и undefined - подтипы всех типов данных
let age2: null = null;
let age3: undefined = undefined;

// interface User {
//     name: string,
//     age: number,
// }
// interface User {
//     isAdmin:boolean
// }
let user : UserWithAdmin = {
    name: "John",
    age: 20,
    isAdmin: false,
    friends: {
        amount: "3",
    }
}
type User = {
    name: string,
    age: number,
}
type UserWithAdmin = User & {
    isAdmin: boolean
    friends: UserFriends
}
type UserFriends = {
    amount: number | string,
    names?: Array<number>
}