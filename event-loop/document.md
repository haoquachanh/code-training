1. What is event-loop in Node.js?
   Node.js runs on single thread, but handles async operations using:
   - libuv -> handles I/O (file, network, etc)
   - V8 engine -> executes JavaScript
   - Event loop -> schedules and executes tasks
     ==> Event Loop continously checks queues and pushes tasks into the call stack

2. Core Components:

- Call stack:
  - Executes synchronous code.
  - LIFO (Last In, First Out).
- Callback Queue (Macrotask Queue)
  - setTimeout
  - setInterval
  - I/O callback
- Microtask Queue
  - Higher priority than macrotask
  - Includes:
    - Promise.then / catch / finally
    - Process.nextTick

3. Execution Priority
   Call stack
   -> process.nextTick queue
   -> Microtask queue (Promise)
   -> Macrotask queue (timer, IO, setImmediate)

4. Event Loop Phase
   Node.js Event Loop has 6 phases:
   - timer --> setTimeout, setInterval
   - pending callbacks
   - idle, prepare
   - poll --> IO operations
   - check --> setImmediate
   - close callback
