/* Your Code Here */

function createEmployeeRecord(array) {
    let obj = {
        firstName: array [0],
        familyName: array [1],
        title: array [2],
        payPerHour: array [3],
        timeInEvents: new Array(),
        timeOutEvents: new Array()
    }
    return obj  
}

let createEmployeeRecords = (array) => {
    return array.map(employee => {
      return createEmployeeRecord(employee)
     })
 }

function createTimeInEvent(dateStamp){
    let dateStampArray = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStampArray[1]),
        date: dateStampArray[0],
    })
    return this
}

function createTimeOutEvent(dateStamp){
    let dateStampArray = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStampArray [1]),
        date: dateStampArray [0],
    })
    return this
}

function hoursWorkedOnDate(objThree, dateForm){
   
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