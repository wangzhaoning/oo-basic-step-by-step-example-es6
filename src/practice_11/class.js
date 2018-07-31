
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
        if (this.teacher) {
            console.log("I am "+this.teacher.name+". I know "+student.name+" become Leader of Class "+student.klass.number+".");
        }
    }
    appendMember(student){
        student.klass=this;
        if (this.teacher){
            console.log("I am "+this.teacher.name+". I know "+student.name+" has joined Class "+student.klass.number+".") ;
        }
    }
    registerAssignLeaderListener(teacher){
        this.teacher=teacher;
    }
    registerJoinListener(teacher){
        this.teacher=teacher;

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

