/*Task 
Given  lines of HTML, find the tag names (ignore any attributes) 
and print them as a single line of lexicographically ordered semicolon-separated values (eg. tag1;tag2;tag3)*/



function processData(input) {
    const re = /<\s*([a-z][a-z0-9]*)[^>]*>/ig;
    const tagSet = new Set();
    let match = null;
    while ((match = re.exec(input)) !== null) {
        tagSet.add(match[1]);
    }
    console.log(Array.from(tagSet).sort().join(';'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
