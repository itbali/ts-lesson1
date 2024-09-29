//деструктуризация массива. Присваиваем переменным значения из массива
// const numbers = [1, 2, 3, 4, 5];
// const [first, second] = numbers;
// равносильно записи:
// const first = numbers[0];
// const second = numbers[1];
// console.log(first); //1
// console.log(second); //2

//деструктуризация объекта. Присваиваем переменным значения из объекта
// const userObject = {
//     useName: 'John',
//     userAge: 25,
//     friends: {
//         amount: 10
//     }
// };
// const { useName, userAge } = userObject;
// const {amount : userFriendsAmount} = userObject.friends
// console.log(userFriendsAmount)

// rest
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...other] = numbers;
console.log(other)

const userObject = {
    useName: 'John',
    userAge: 25,
    friends: {
        amount: 10
    }
};
const { useName, ...otherData } = userObject;
console.log(otherData)