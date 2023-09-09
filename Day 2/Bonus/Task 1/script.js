
function printTags() {
    for (var i = 1; i <= 6; i++) {
        document.write(`<h${i}>Hello World</h${i}>`);
    }
}

document.write(printTags())