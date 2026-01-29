JavaScript Classes Practice: User & Admin

This project demonstrates JavaScript classes, inheritance, and variable scope using a simple example of users and an admin.

Overview

user Class: Represents a standard user with name and email. Includes a method viewData() to display user info and a global data variable.

admin Class: Inherits from user and adds a role. Includes editData() to modify a global variable DATA.

Key Concepts

Classes and constructors

Inheritance

Global vs instance variables

Methods for viewing and editing data

Example Usage
let user1 = new user("John Doe", "john@example.com");
user1.viewData();

let user2 = new user("Jane Smith", "jane@example.com");
user2.viewData();

let admin1 = new admin("Admin User", "admin@example.com", "Super Admin");
admin1.editData();

user1.viewData();
user2.viewData();

Sample Output
Name is John Doe and Email is john@example.com
Hello World
Name is Jane Smith and Email is jane@example.com
Hello World
Name is John Doe and Email is john@example.com
Data Edited by Admin
Name is Jane Smith and Email is jane@example.com
Data Edited by Admin
