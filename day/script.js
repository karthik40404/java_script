function displayDay() {
    dayNumber = parseInt(document.getElementById('day').value);
    let dayName = "";

    switch (dayNumber) {
        case 1:
            dayName = "Sonday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid number! Please enter a number between 1 and 7.";
    }

    document.getElementById('h1').innerHTML = dayName;
}