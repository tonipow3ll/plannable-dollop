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

//original function to write letters to top of page
// storageInput.addEventListener('.storage', letters => {
//     text.textContent = letters.target.value
//   //  console.log(letters.target.value)
// })

$('.storage').on("keyup", function(letters) {
    text.textContent = letters.target.value;
})

// writes items from local storage to page 
const saveEvents = () => {
    localStorage.setItem('userInput', text.textContent);
}




$(".eventBtn").on('click', function (event) {
    event.preventDefault();
    let $this = $(this);
    let userInfo = $this.closest('form').find('input').attr('data-time');
    let userText = $this.closest('form').find('input').val();

    userInfo = userText;
    localStorage.setItem('userInput', text.textContent)
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