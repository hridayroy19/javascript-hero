function isLeapYear (year){
    const remainder = year % 4;
    if (remainder ===0){
        return true;

    }
    else{
        return false;
    }
}

const myLeapYear= isLeapYear(2008);
console.log(myLeapYear);
const sheLeapYear= isLeapYear(2026);
console.log(sheLeapYear);
const hereLeapYear= isLeapYear(1931);
console.log(hereLeapYear);
