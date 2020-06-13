
/** asynchronous events in js */

/** internal working of js and node, non-blocking
 * 
 * call stack - where all the function is get executed, one by one in fifo manner, the main() method is the heart of the program to
 * start the function to run, after each and every line of code is executed synchronously 
 * node api - setTimeout, setInterval function will be pushed while executed the code. since js is single thread it will keep on executing
 * the code. After certian period of time when the time wait has completed it will be pushed to event loop
 * event loop (callback queue) - it will maintain all the callback function to be executed, it is maintained by which function has finished its
 * execution. After finishing that event loop wait for the main function to be completed in call stack. Once it is done the event loop will
 * start to push the function from event loop to call stack to execute the remaining items in event loop
 * Main important thing here - event loop only starts to execute after the main function complete the execution till then it will wait and after it
 * is done. All the event loop function are pushed to call to
 */

console.log("Starting")

setTimeout(() => {
    console.log('2 seconds timeout')
}, 2000)

setTimeout(() => {
    console.log('0 seconds timeout')
}, 0)

console.log("Stopping")