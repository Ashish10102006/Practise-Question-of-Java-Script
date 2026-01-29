let DATA = "Hello World";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    name;
    email;
    viewData(){
        console.log(`Name is ${this.name} and Email is ${this.email}`);
        console.log(DATA);
    }
}
class admin extends user{
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }   
     editData(){
        DATA = "Data Edited by Admin";
    }
}

let user1 = new user("John Doe", "john@example.com");
user1.viewData();
let user2 = new user("Jane Smith", "jane@example.com");
user2.viewData();
let admin1= new admin("Admin User", "admin@example.com", "Super Admin");
admin1.editData();
user1.viewData();
user2.viewData();