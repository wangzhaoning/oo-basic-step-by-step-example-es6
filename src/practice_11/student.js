
import Person from "./person"

export default class Student extends Person{
    constructor(id, name, age, klass){
        super( id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(this===this.klass.leader)
        {
            return super.introduce()+" I am a Student. I am Leader of Class "+this.klass.number+".";
        }
        return super.introduce() + " I am a Student. I am at "+this.klass.getDisplayName()+".";
    }
}