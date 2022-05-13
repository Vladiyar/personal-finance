// const fs = require('fs');

// fs.writeFileSync('hello.txt', 'Hello from Node.js');
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500)
}

setTimeout(() => {
    console.log('Timer is done...');
    fetchData(text => {
        console.log(text);
    })
}, 2000);

console.log('Hello');
console.log('Hi');