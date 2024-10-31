// 변수의 데이터 타입 명시

let stdId : number = "11111";
let stdName : string = "lee";
let age : number = 20;
let gender : string = "male";
let course : string = "Typescript";
let completed : boolean = false ;

interface Student{
    stdId : number;
    stdName : string;
    age? : number;
    gender? : 'male'|'female';
    course? : string;
    completed : boolean;
    //setName(name : string) : void;
    setName? : (name : string) => void;
    getName? : () => string;
}

class Mystudent implements Student{   //인터페이스를 클래스에서 상속
    stdId : 98989;
    stdName : 'lee';
    age? : 20;
    gender : 'male';
    course : 'Typescript';
    completed : false;

    setName(name : string) : void { //오버라이딩
        this.stdName = name;
        console.log("이름: "+ this.stdName);
    }
}

const myInstance = new Mystudent();
//myInstance.setName("Alice");

// 함수 데이터 타입 명시(매개변수, 리턴타입)
/*function Plus(a : number, b : number) : number{
    return a + b;
}*/

function getInfo(id : number) : Student {
    return {
        stdId : id,
        stdName : 'lee',
        age : 20,
        gender : 'male',
        course : 'Typescript',
        completed : false,
    }
}

function setInfo(student : Student): void {
    console.log(student);
}

//console.log(getInfo(5678));

let student1 : object = {
    stdId : 919919,
    stdName : 'park',
    age : 30,
    gender : 'female',
    course : 'Typescript',
    completed : true}

//setInfo(student1);

const user : {name: string, age: number} = {
    name:'john',
    age: 25
};


type strOrNum = number | string;

let numStr: strOrNum = '100';
let item : number;

function convertToString(val : strOrNum): string{
    if (typeof val === 'string'){
        item = 0;
    }
    else{
        item = val;
    }
    return String(val);
}

//console.log(convertToString(numStr));


function convertToNumber(val : strOrNum): number{
    return Number(val);
}

//숫자형 배열
let numbers : number[] = [1, 2, 3, 4, 5];

//문자형 배열
let fruits : string[] = ['apple', 'orange', 'grape'];

/*for (let i = 0; i<numbers.length;i++){
    console.log(numbers[i]);
}*/

//배열의 union 타입
let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];

/*for (let i = 0; i<mixedArray.length;i++){
    console.log(mixedArray[i]);
}*/

//Spread 연산자
let greeting : [number, string, boolean] = [1,"hello", true];

let firstArray = [1, 2, 3];
let SecondArray = [4, 5, 6];

let combineArray = [...firstArray, ...SecondArray];

for (let i = 0; i<combineArray.length;i++){
    console.log(combineArray[i]);
}


