import Person from "./person"
export default class Teacher extends Person {

    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        if(!this.klasses)
            return super.introduce() + " I am a Teacher. I teach No Class.";
        let classprint="";
        for (let i=0; i < this.klasses.length; i++) {
            if (i===this.klasses.length - 1)
                classprint+= this.klasses[i].number;
            else
                classprint+= this.klasses[i].number + ", ";
        }
        return super.introduce() + " I am a Teacher. I teach Class " + classprint + ".";
    }
    isTeaching(student) {
        isIn(student);
    }
}

