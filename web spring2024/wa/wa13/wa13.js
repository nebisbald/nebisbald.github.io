//problem 1
let employees = '{ "employees" : [ {"firstName":"Sam", "department":"tech", "designation":"manager", "salary":"40000", "raiseEligible":"true"} , { "firstName":"Mary", "department":"finance", "designation":"trainee", "salary":"18500", "raiseEligible":"true" }, { "firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"21200", "raiseEligible":"false" } ]}';
let employeeObj = JSON.parse(employees);
console.log(employeeObj.employees);

//problem 2

let company = '{"companyName":"Tech Stars", "website":"www.techstars.site", "employees" : [ {"firstName":"Sam", "department":"tech", "designation":"manager", "salary":"40000", "raiseEligible":"true"} , { "firstName":"Mary", "department":"finance", "designation":"trainee", "salary":"18500", "raiseEligible":"true" }, { "firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"21200", "raiseEligible":"true" } ]}';
let companyObj = JSON.parse(company);
console.log(companyObj);

//problem 3

employees = '{ "employees" : [ {"firstName":"Sam", "department":"tech", "designation":"manager", "salary":"40000", "raiseEligible":"true"} , { "firstName":"Mary", "department":"finance", "designation":"trainee", "salary":"18500", "raiseEligible":"true" }, { "firstName":"Bill", "department":"HR", "designation":"executive", "salary":"21200", "raiseEligible":"false" }, { "firstName":"Anna", "department":"tech", "designation":"executive", "salary":"25600", "raiseEligible":"false" } ]}';
employeeObj = JSON.parse(employees);
console.log(employeeObj.employees);

//problem 4


let total = 0;
for(let i in employeeObj.employees){
    total += parseInt(employeeObj.employees[i].salary);
}
console.log(total);

//problem 5
raise();
function raise(){
    for(let i in employeeObj.employees){
        if(employeeObj.employees[i].raiseEligible == "true"){
            console.log("Salary before raise: " + employeeObj.employees[i].salary);
            employeeObj.employees[i].salary = parseInt(employeeObj.employees[i].salary) + (parseInt(employeeObj.employees[i].salary) * 0.10);
            console.log("Salary after raise: " + employeeObj.employees[i].salary);
        }
    }
}

//problem 6

employeeObj.employees[0].wfh = true;
employeeObj.employees[1].wfh = false;
employeeObj.employees[2].wfh = false;
employeeObj.employees[3].wfh = true;
for(let i in employeeObj.employees){
    console.log(employeeObj.employees[i].firstName);
    console.log("WFH? " + employeeObj.employees[i].wfh);
}


