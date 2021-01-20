// function to show time hours on the left side of page
//      gray out hours if 'past' hour.. ex 10AM - 9AM will be grayed out
// function for SAVING events to certain hours
// function for saving events to local storage
// func for creating elements?!

//later - fix your buttons 



//buttons
 $(document).ready(function () {
        
 // todays Date / current time 
const currentDate = dayjs().format('MMM D, dddd');
    $("#currentDay").text(currentDate);
        
const currentTime = dayjs().format('h:mm');
    $("#currentTime").text(currentTime);
});


// write day hours to local storage, add event listener for button
function setAppointments(){
    localStorage.setItem('userEvent', JSON.stringify(dayHours));
    
}
// listener for button, save to local storage
// $(".input").change(function(event){
//     var input = $(event.currentTarget).val();
//     $("ul").append('<li>'+ input + '</li>')
//     $("li").addClass('busy')
//     setAppointments();
// })


// read day hours from local storage
function readAppointments(){
   let schedule =  JSON.parse(localStorage.getItem('dayHours'))
   let today = dayjs().format('MMM D, dddd');

     $('.input').each(function (i, element) {
// this function is returning value of 'user event', need to make this 'WRITE' to the html page 
        if (schedule !== null){
          $('.input').append('<li' + schedule + '<li>');
        }
     })
    console.log($('.input'))
}

// read day hours, and write day hours is like tossing a ball back and forth... WRITE to local storage, LS only accepts strings..
// for LS to give back - it give's ____ back as an object. 
// then write it to the dom, once you have it back as an object. 


// store 'hours in day' in array/ojbect.... add a conditional to show if time is past x show something
// loop over this array - create conditional in that - IF 10AM, 'blank out(add class, 'past') 9AM, keep looping
dayHours = 
[
    {hour: "9AM", userEvent: "GET TO WORK"},
    {hour: "10AM" ,userEvent: ""},
    {hour: "11AM" , userEvent: ""},
    {hour: "12PM", userEvent: ""},
    {hour: "1PM", userEvent: ""},
    {hour: "2PM", userEvent: ""},
    {hour: "3PM", userEvent: ""},
    {hour: "4PM", userEvent: ""},
    {hour: "5PM", userEvent: "PARTY"},
]

// loop to go over 'time of day', if hour has passed section will be 'grayed out' or show 'past' class
function timeOfDay(){
    for (dayHours = 0; dayHours >= 9; dayHours++){
        $('body').addClass('past');
    }
}
console.log(dayHours);

function createNewEvents(){
    for (let i=0; i < dayHours.length; i++){
        let dayHours = dayHours[i];

        let li = document.createElement("li")
        li.textContent = userInput;
        li.setAttribute("data-index", i);

        let button = document.querySelector(".saveBtn");
        button.textContent = "completed";
        //fix below 
        button.on('click' ,(event) => {
            event.currentTarget;
            $('button').addClass('past');
        })
    }
}

//store updates, will read on page load if there is data 
setAppointments();
readAppointments();


// NOTES -------------------------------------------------------------------------------------------

// as a user... see my events for the day, and add or delete as needed
// as a dev... persist / store events (somehow) || DONE
//              listen for new events / deleted events
// have something to store, give (local storage) a key and a value || DONE 
// local storage only stores 'strings' (JSON.stringify())
// JSON.parse - turns a string back into objects 

