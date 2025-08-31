// JavaScript code for the Node.js demo project

// Function to run the JavaScript code
function runCode() {
    const code = document.getElementById('js-code').value;
    const outputElement = document.getElementById('output');
    
    // Clear previous output
    outputElement.innerHTML = '';
    
    // Override console.log to capture output
    const originalConsoleLog = console.log;
    console.log = function(...args) {
        originalConsoleLog.apply(console, args);
        outputElement.innerHTML += args.join(' ') + '\n';
    };
    
    // Try to execute the code
    try {
        eval(code);
    } catch (error) {
        console.log('Error:', error.message);
    }
    
    // Restore original console.log
    console.log = originalConsoleLog;
}

// Function to clear the output
function clearOutput() {
    document.getElementById('output').innerHTML = '';
}

// Function to load example code
function loadExample(exampleNum) {
    const codeArea = document.getElementById('js-code');
    
    switch(exampleNum) {
        case 1:
            codeArea.value = `// File System Operations (Node.js)
const fs = require('fs');



// Note: This code would need to be run with Node.js, not in the browser`;
            break;
    }
}

// Run the initial example code when page loads
window.onload = runCode;