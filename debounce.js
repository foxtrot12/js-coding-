function debounce(func, delay) {

    let timeOutId = null

    return (...args) => {
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => {
            func(args)
        }, delay);
    }

}

function logMessage(msg) {
    console.log(`[${new Date().toISOString()}] Debounced call with:`, msg);
}

// Wrap it with debounce (1 second delay)
const debouncedLog = debounce(logMessage, 1000);

// Demo: call the debounced function 5 times, 200ms apart
console.log("Starting rapid calls...");

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(`[${new Date().toISOString()}] Immediate call #${i}`);
        debouncedLog(`message #${i}`);
    }, i * 200);
}