$(document).ready(function () {

    $(".eventBtn").on('click', () => {
        let userInput = $("<input>")
        userInput.innerHTML.val(userInput);
        $("<body>").append("<p>" + userInput + "</p>")
    })
// time date functions
const currentDate = dayjs().format('MMM D, dddd');
    $("#currentDay").text(currentDate);
        
const currentTime = dayjs().format('h:mm');
    $("#currentTime").text(currentTime);
});