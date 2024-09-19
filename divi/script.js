function Divi() {
    number = parseInt(document.getElementById('number').value);
    lastDigit = number % 10;

    if (lastDigit % 3 === 0) {
        document.getElementById('result').innerHTML = "The last digit " + lastDigit + " is divisible by 3.";
    } else {
        document.getElementById('result').innerHTML = "The last digit " + lastDigit + " is not divisible by 3.";
    }
}