/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
console.log(area/2)


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log("Laptop")
} else if(money >= 10000 && money < 25000){
    console.log("Cycle")
} else {
    console.log("Chocolate")
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(var i=1; i<=lastDay; i++){
    var state = "rest"
    if(i%3 == 0){
        state = "medicine"
    }
    console.log(i+" -  "+state)
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
var str = "Delete"
if(fileName[0]=="#" || fileName.includes(".pdf") || fileName.includes(".docx") ){
    str = "Store"
}
console.log(str)


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd"
console.log(email)


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var increment = 0.05

for(var i=0; i<experience; i++){
    startingSalary += startingSalary * increment
}

console.log(startingSalary.toFixed(2))