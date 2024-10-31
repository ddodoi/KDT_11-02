// 변수의 데이터 타입 명시
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stdId = "11111";
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
var Mystudent = /** @class */ (function () {
    function Mystudent() {
    }
    Mystudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름: " + this.stdName);
    };
    return Mystudent;
}());
var myInstance = new Mystudent();
//myInstance.setName("Alice");
// 함수 데이터 타입 명시(매개변수, 리턴타입)
/*function Plus(a : number, b : number) : number{
    return a + b;
}*/
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        age: 20,
        gender: 'male',
        course: 'Typescript',
        completed: false,
    };
}
function setInfo(student) {
    console.log(student);
}
//console.log(getInfo(5678));
var student1 = {
    stdId: 919919,
    stdName: 'park',
    age: 30,
    gender: 'female',
    course: 'Typescript',
    completed: true
};
//setInfo(student1);
var user = {
    name: 'john',
    age: 25
};
var numStr = '100';
var item;
function convertToString(val) {
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
//console.log(convertToString(numStr));
function convertToNumber(val) {
    return Number(val);
}
//숫자형 배열
var numbers = [1, 2, 3, 4, 5];
//문자형 배열
var fruits = ['apple', 'orange', 'grape'];
/*for (let i = 0; i<numbers.length;i++){
    console.log(numbers[i]);
}*/
//배열의 union 타입
var mixedArray = [1, 'two', 3, 'four'];
/*for (let i = 0; i<mixedArray.length;i++){
    console.log(mixedArray[i]);
}*/
//Spread 연산자
var greeting = [1, "hello", true];
var firstArray = [1, 2, 3];
var SecondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), SecondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
