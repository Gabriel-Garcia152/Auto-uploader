const fs = require('fs');
const path = "../dir";

fs.watch(path, (eventType, filename) => {
    console.log(`Event type is: ${eventType}`);

    if(filename) {
        console.log(`File name: ${filename}`)
    } else {
        console.log(`File name not found`)
    }
})