
/** using normal function call */
let add = function (x) {
    return x + x
}

console.log(add(5))

/** using arrow functions */
add = (x) => {
    return x + x
}

console.log(add(10))

/** if the function is short and do not do much coding we can use below method 
 * short hand functions
 * if the value return staright answer we can use this  
*/
add = (x) => x + x
console.log(add(20))

/** arrow function bindings and other things */
const object = {
    message: "Happy birthday",
    name: ['Vishnu', 'Sriram', 'Burnos'],
    NormalFunction() {
        console.log(this.message)
        this.name.forEach(function (value) {
            //     console.log(this.message + ' ' + value)
        })
        /** solves function binding with arrow functions */
        this.name.forEach((value) => {
            //   console.log(this.message + ' ' + value)
        })
    },


}

object.NormalFunction()
// object.fun()

/** to get the inner values in array we use filter, map and reduce function to extract the values */
const tasks = {
    tasks: [{
        task: 'reading',
        status: true
    },
    {
        task: 'eating',
        status: false
    }, {
        task: 'sleeping',
        status: false
    }],
    taskToCheck() {

       /*  const filters = this.tasks.filter((value) => {
            return value.status != false
        })
        console.log(filters) */

        /** shorhand with arrow function */
        return this.tasks.filter((value) => value.status !== false)


    }
}

// tasks.taskToCheck()
console.log(tasks.taskToCheck())