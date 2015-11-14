function displayOutcome() {
    var i, text;
    var maxValue = $('#entry').val();
    //alert(maxValue);

    // count numbers 1 - 100 to figure out if each number is divisible by 3, 5, or both
    for (i = 1; i <= maxValue; i++) {
        // for each number, check the following:

        text = i;

        //is the number divisible by 3?
        if (i % 3 === 0) {
            text = "Fizz";
        }
        //if yes, then see if it is also divisible by 5
        if (i % 5 === 0) {
            text = "Buzz";
        }

        if (i % 15 === 0) {
            text = "FizzBuzz";
        }
        $('#content').append(text + "<br>");
    }


}