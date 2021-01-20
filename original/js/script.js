// function to show time hours on the left side of page
//      gray out hours if 'past' hour.. ex 10AM - 9AM will be grayed out
// function for SAVING events to certain hours
// function for saving events to local storage
// func for creating elements?!

//later - fix your buttons 



//buttons
$(document).ready(function () {

    saveButton = document.querySelector('button');
    input = document.querySelector("input");
    body = document.querySelector("ul");


// todays Date / current time 
const currentDate = dayjs().format('MMM D, dddd');
   $("#currentDay").text(currentDate);

const currentTime = dayjs().format('h:mm');
   $("#currentTime").text(currentTime);
});


// write day hours to local storage
function setAppointments(){
   localStorage.setItem('dayHours', JSON.stringify(dayHours));
}


// read day hours from local storage // below works
function readAppointments(){
  let schedule =  JSON.parse(localStorage.getItem('dayHours'))
    $('.input').each(function (i, element) {
// this function is returning value of 'user event', need to make this 'WRITE' to the html page 
        $("ul").append(schedule[i].userEvent)
        console.log(schedule[i].userEvent)
    })
}


// store 'hours in day' in array/ojbect.... add a conditional to show if time is past x show something
// loop over this array - create conditional in that - IF 10AM, 'blank out(add class, 'past') 9AM, keep looping
dayHours = 
[
   {hour: "9AM", userEvent: ""},
   {hour: "10AM" ,userEvent: ""},
   {hour: "11AM" , userEvent: ""},
   {hour: "12PM", userEvent: ""},
   {hour: "1PM", userEvent: ""},
   {hour: "2PM", userEvent: ""},
   {hour: "3PM", userEvent: ""},
   {hour: "4PM", userEvent: ""},
   {hour: "5PM", userEvent: "PARTY"},
]

function timeOfDay(){
   for (dayHours = 0; dayHours >= 9; dayHours++){
       $('body').addClass('past');
   }
   console.log(dayHours);
}

// as a user... see my events for the day, and add or delete as needed
// as a dev... persist / store events (somehow) 
//              listen for new events / deleted events
// have something to store, give (local storage) a key and a value
// local storage only stores 'strings' (JSON.stringify())
// JSON.parse - turns a string back into objects 

setAppointments();

readAppointments();


    
    //once save button is clicked, saves user input to local storage, 
    // $(".saveBtn").on('click', function(){ 
        //    localStorage.setItem('input', input.value);
        //    saveEvent();
        // })
        
        // //  adds user input to page 
        // function saveEvent(){
            //     events = localStorage.getItem("input")
            // };
            
            // function to 'get' input item on page load / reload 
            // $(".input").change(function(event){
            //     var input = $(event.currentTarget).val();
            //     $("ul").append('<li>'+ input + '</li>')
            //     $("li").addClass('busy')
            // })