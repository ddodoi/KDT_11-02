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