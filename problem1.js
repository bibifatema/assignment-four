//problem - 01

/*function calculateTax(income, expenses) {


    if(income <0 || expenses < 0 || expenses > income){
        return "Invalid Input" 
    }

   
    total_difference = income - expenses

    tax = (total_difference * .20)
    return tax;

}
*/


//problems2

/*function sendNotification(email) {

    if(email.indexOf("@") === -1){
        return "Invalid Email"
    }
    
    let parts = email.split("@");
    username = parts[0];
    domainName = parts[1];
    message = username + " sent you an email from " + domainName

    if(email.indexOf("@") !== -1){
        return message
    }

}
*/

//problem: 03

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return  "Invalid Input" 
    }
    for (let i = 0; i<name.length; i++){
        const char = name[i];
        if(char >="0" && char <= "9"){
            return true
        }
    }
    return false
}

console.log(checkDigitsInName("Suman"))

//Problem: 04

/*function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input"
    }
    
    let total_marks = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily == true) {
        total_marks = total_marks + (20)
    }
    
    if (total_marks >= 80 && obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily){
        return true
    }
    else if (total_marks >= 80 && obj.testScore <= 50 && obj.schoolGrade <= 30 && !obj.isFFamily){
        return true
    }
    else if(total_marks < 80 && obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFFamily){
        return false
    }
    else if(total_marks < 80 && obj.testScore <= 50 && obj.schoolGrade <= 30 && !obj.isFFamily){
        return false
    }   

}
*/
//problem: 05

/*function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }

    let sum = 0;
    for(i = 0; i < waitingTimes.length; i++){
        sum += waitingTimes[i];
    }

    averageTime = Math.round(sum/waitingTimes.length);
    remaining_people = serialNumber - waitingTimes.length -1 ;
    if (remaining_people <= 0){
        return 0
    }

    IsratWaitingTime =remaining_people * averageTime;
    return IsratWaitingTime; 
}





*/