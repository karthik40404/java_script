function ele(){
    unit = parseInt(document.getElementById('unit').value);
    let billAmount = 0;

    if (unit <= 100) {
        billAmount = 0;
    } else if (unit <= 200) {
        billAmount = (unit - 100) * 5;
    } else {
        billAmount = 100 * 5 + (unit - 200) * 10;
    }
    document.getElementById('h1').innerHTML = "Total bill amount: Rs " + billAmount;
}
