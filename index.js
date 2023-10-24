document.getElementById('reverseButton').addEventListener('click', function() {
    var inputString = document.getElementById('inputString').value;
    var reversedString = reverseString(inputString);
    document.getElementById('result').textContent = reversedString;
});

function reverseString(str) {
    let strRev = "";
    for(let x=str.length-1;x>=0;x--){
        strRev = strRev + str[x];
    }
    return strRev;
}
