function fibonacci(n, c) {
    var indent = "";
    for (var i = 0; i < c; i++) {
        indent += " ";
    }
    console.log(indent + "fibonacci(" + n + ")");
    if (n < 2) {
        return 1;
    } else {
        return fibonacci(n - 2, c + 4) + fibonacci(n - 1, c + 4);
    }
}

console.log(fibonacci(7, 0));