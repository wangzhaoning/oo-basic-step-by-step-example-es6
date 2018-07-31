
export default class Class
{
    constructor(number)
    {
        this.number=number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if (this.number ==student.klass.number) {
            this.leader=student;
        }
        else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass=this;
    }
    isIn(student){
        if(student.klass.number===this.number)
        {
            return true;
        }
        else
            return false;
    }
}

