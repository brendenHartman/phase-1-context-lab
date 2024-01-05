/* Your Code Here */
function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arr){
    let newArr = [];
    arr.forEach(element => {
       newArr.push(createEmployeeRecord(element)); 
    });
    return newArr;
}

function createTimeInEvent(time){
    let newObj = {
        type: "TimeIn",
        hour: parseInt(time.slice(11),10),
        date: time.slice(0,10)
    };
    this.timeInEvents.push(newObj);
    return this;
}

function createTimeOutEvent(time){
    let newObj = {
        type: "TimeOut",
        hour: parseInt(time.slice(11),10),
        date: time.slice(0,10)
    };
    this.timeOutEvents.push(newObj);
    return this;
}

function hoursWorkedOnDate(date){
    let inn = 0;
    let out = 0;
    this.timeInEvents.forEach((event) => {
        if(event.date === date){
            inn = event.hour;
        }
    })
    this.timeOutEvents.forEach((event) => {
        if(event.date === date){
            out = event.hour;
        }
    })
    return (out - inn) / 100;
}

function wagesEarnedOnDate(day){
    return hoursWorkedOnDate.call(this,day) * this.payPerHour;
}

function findEmployeeByFirstName(arr,first){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].firstName === first){
            return arr[i];
        }
    }
}

function calculatePayroll(arr){
    let total = 0;
    arr.forEach(element => {
        total += allWagesFor.call(element);
    });
    return total;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

