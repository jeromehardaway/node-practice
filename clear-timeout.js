function printHello() {
    console.log("Hello, World!");
}

var timeOut = setTimeout(printHello, 2000);

clearTimeout(timeOut);