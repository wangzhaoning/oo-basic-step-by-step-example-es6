
/*class Person{
    name;
    age;
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
    introduce(){
        return "My name is Tom. I am 21 years old.";
    }
}*/
export default class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "My name is "+ this.name + ". I am " + this.age +" years old.";
    }
}
