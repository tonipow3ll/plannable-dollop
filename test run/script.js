$(document).ready(function () {

// time date functions
const currentDate = dayjs().format('MMM D, dddd');
    $("#currentDay").text(currentDate);
        
const currentTime = dayjs().format('h:mm');
    $("#currentTime").text(currentTime);

let storageInput = document.querySelector('.storage')
let text = document.querySelector('.text')
let storedEvents = localStorage.getItem('userInput')
let userEvents = []

if(storedEvents){
    text.textContent = storedEvents;
}

//----------READ ME------------
// if time has passed, loop over 'userevents' (empty array), and add classes to past times (use data-index in html)
//read docs
//----------READ ME------------
for (i = 0; i > userEvents; i++){

}

//probably don't need this -but looks pretty neat
$('.storage').on("keyup", function(letters) {
    // (this).text.textContent = letters.target.value;
    text.textContent = letters.target.value;
})

// writes items from local storage to page 
const saveEvents = () => {
    localStorage.setItem('userInput', text.textContent);
}

// loop over everything, if time is passed - will add class
function timeOfDay(){
    for (userEvents = 0; userEvents.length < 9; userEvents++){
        $('body').addClass('past');
        
    }
    console.log(userEvents);
 }


// when save button is clicked - saves everything to local storage
$(".eventBtn").on('click', function (event) {
    event.preventDefault();
    let $this = $(this);
    let userInfo = $this.closest('form').find('input').attr('data-time');
    let userText = $this.closest('form').find('input').val();

    userInfo = userText;
    localStorage.setItem('userInput', text.textContent)
    userEvents.push("")
    saveEvents();
})

timeOfDay();
 // end script
});

whatDayIsIt();

// --------------NOTES 

//  // Creating a div to hold the movie
//  var movieDiv = $("<div class='movie'>");

// // Creating an element to have the rating displayed
// var pOne = $("<p>").text("Rating: " + rating);

// // Displaying the rating
// movieDiv.append(pOne);

// when 9AM button is clicked, save event and show '9AM -i have stuff to do here- 

// $(".eventBtn").on("click", function(event){
    //     event.preventDefault();   
    //     let newEvents = $(".text").val().trim();
    //     let pastEvents = JSON.stringify(storedEvents);
    //     // let para = $("<p>").append(newEvents); 
    //     //will need the below for 'past' events
    //     let para = $("<p>").text( $("input").val());
    //     userEvents.push(newEvents);
    //     $("#write1").append(para)
    //     saveEvents();
    //     }