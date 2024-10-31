// 변수의 데이터 타입 명시
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
