export class Staff {

    private staff_id : number;
    private staff_name : string;
    private staff_age : number;
    private staff_area : string;
    private staff_salary : number;

    constructor(staff_id : number, staff_name : string, staff_age : number, staff_area : string, staff_salary : number) {
        this.staff_id = staff_id;
        this.staff_name = staff_name;
        this.staff_age = staff_age;
        this.staff_area = staff_area;
        this.staff_salary = staff_salary;
    }

}