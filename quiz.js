const employees = [
    { name: "laura diaz", rate: 18.10, hours: 55 },
    { name: "anna pecots", rate: 20.21, hours: 80 },
    { name: "sofia lauren", rate: 22.20, hours: 40 },
];


class payRoll {
    constructor(payRoll) {
        this.payRoll = payRoll
        this.names = this.getNames(this.names)
        this.hours = this.getFullTime(this.hours)
        this.rate = this.getTotalLabor(this.rate)

    }

    getNames(employees) {
        return employees.map((employees) => {
            return name.sort()

        })

    }

    getFullTime(employees) {
        return hours.filter((hours) => {
            return (hours > 60) ? 1 : 0

        })
    }

    getTotalLabor(rate) {
       

}



const test = new payRoll(employees)
console.log(test.hours)



