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
storageInput.addEventListener('input', letters => {
    text.textContent = letters.target.value
  //  console.log(letters.target.value)
})

// writes items from local storage to page 
const saveEvents = () => {
    localStorage.setItem('userInput', text.textContent)
}

// listens for click on 'event buttons' 

// $(".eventBtn").on("click", function(event){
//     event.preventDefault();
//     let newEvents = $(".text").val().trim();
//     userEvents.push(newEvents);
//     saveEvents();
// })

// below will write to storage, AND save the 'event' to local storage
$("#9AM").on("click", function(event){
    event.preventDefault();
    let newEvents = $(".text").val().trim();
    let pastEvents = JSON.stringify(storedEvents);
    // let para = $("<p>").append(newEvents); 
    //will need the below for 'past' events
    let para = $("<p>").text("9AM event: " + $("input").val());
    userEvents.push(newEvents);
    $("#write").append(para)
    saveEvents();
})


 // end script
});

// --------------NOTES 

//  // Creating a div to hold the movie
//  var movieDiv = $("<div class='movie'>");

// // Creating an element to have the rating displayed
// var pOne = $("<p>").text("Rating: " + rating);

// // Displaying the rating
// movieDiv.append(pOne);

// when 9AM button is clicked, save event and show '9AM -i have stuff to do here- 