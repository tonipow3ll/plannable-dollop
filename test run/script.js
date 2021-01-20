$(document).ready(function () {

// time date functions
const currentDate = dayjs().format('MMM D, dddd');
    $("#currentDay").text(currentDate);
        
const currentTime = dayjs().format('h:mm');
    $("#currentTime").text(currentTime);

    function setAppointments(){
        localStorage.setItem('dayHours', JSON.stringify(dayHours));
    }
    
    
    // read day hours from local storage
    function readAppointments(){
       let schedule =  JSON.parse(localStorage.getItem('dayHours'))
         $('.input').each(function (i, element) {
    // this function is returning value of 'user event', need to make this 'WRITE' to the html page 
            if (schedule !== null)
              input = schedule;
             console.log(schedule[i].userEvent)
         })
        console.log($('.input'))
    }
    // read day hours, and write day hours is like tossing a ball back and forth... WRITE to local storage, LS only accepts strings..
    // for LS to give back - it give's ____ back as an object. 
    // then write it to the dom, once you have it back as an object. 
    
    

    // loop to go over 'time of day', if hour has passed section will be 'grayed out' or show 'past' class
    function timeOfDay(){
        for (dayHours = 0; dayHours >= 9; dayHours++){
            $('body').addClass('past');
        }
    }
   
    
    function createNewEvents(){
        for (let i=0; i < dayHours.length; i++){
            let dayHours = dayHours[i];
    
            let li = document.createElement("li")
            li.textContent = userInput;
            li.setAttribute("data-index", i);
    
            let button = document.createElement("button");
            button.textContent = "completed";
            //fix below 
            button.on('click' ,(event) => {
                event.currentTarget;
                $('button').addClass('past');
            })
        }
    }

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
    
    
    function timeOfDay(){
        for (dayHours = 0; dayHours >= 9; dayHours++){
            $('body').addClass('past');
        }
    }
    //store updates, will read on page load if there is data 
    setAppointments();
    readAppointments();
    createNewEvents();
    timeOfDay();
    
    
});

// below was working in old file - deleted
saveButton = document.querySelector('button');
     input = document.querySelector("input");
     body = document.querySelector("ul");

     $(".input").change(function(event){
         var input = $(event.currentTarget).val();
         $("ul").append('<li>'+ input + '</li>')
         $("li").addClass('busy')
     })
     
     //once save button is clicked, saves user input to local storage, 
$(".saveBtn").on('click', function(){ 
    localStorage.setItem('input', input.value);
    saveEvent();
})

//  adds user input to page 
 function saveEvent(){
     events = localStorage.getItem("input")
 };