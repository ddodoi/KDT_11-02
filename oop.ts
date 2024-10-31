//멤버변수 == 속성 == 프로퍼티
//멤버함수 == 메소드

class Employee{
    constructor(        //생성자
        private _empName : string, 
        private _age : number, 
        private _empJob : string){}
    
    get empName(){
        return this.empName;
    }
    
    set empName(val : string){
        this._empName = val;
    }

    printEmp = (): void{
        //console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
        console.log(this._empName + "의 나이는 "+ this._age +"이고,직업은 "+ this._empJob + "입니다.");
    }
}

let employee1 = new Employee('kim', 20, 'developer');

employee1.empName = 'park';

employee1.printEmp();