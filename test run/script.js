$(document).ready(function () {

// time date functions
const currentDate = dayjs().format('MMM D, dddd');
    $("#currentDay").text(currentDate);
        
const currentTime = dayjs().format('h:mm');
    $("#currentTime").text(currentTime);

let storageInput = document.querySelector('.storage')
let text = document.querySelector('.text')
let button = document.querySelector('.eventBtn')
let storedEvents = localStorage.getItem('userInput')
let userEvents = []

if(storedEvents){
    text.textContent = storedEvents;
}
storageInput.addEventListener('input', letters => {
    text.textContent = letters.target.value
  //  console.log(letters.target.value)
})
const saveEvents = () => {
    localStorage.setItem('userInput', text.textContent)
}

$(".eventBtn").on("click", function(event){
    event.preventDefault();
    let newEvents = $(".text").val().trim();
    userEvents.push(newEvents);
    saveEvents();
})

 // end script
});