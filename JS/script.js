$(document).ready(function () {

    // time date functions
    const currentDate = dayjs().format('MMM D, dddd');
        $("#currentDay").text(currentDate);
            
    const currentTime = dayjs().format('h:mm');
        $("#currentTime").text(currentTime);
    

    let text = document.querySelector('.text')
    
    //----------READ ME------------
    // if time has passed, loop over 'userevents' (empty array), and add classes to past times (use data-index in html)
    //read docs
    //----------READ ME------------
    let userEvents = [];
    let userEventsLen = 9;
    let storedEvents = JSON.parse(localStorage.getItem("userEvents"));

    function eventsArr(){
        userEvents = [];
        for (i = 0; i < userEventsLen; i++){
            userEvents.push("");
        //    $('body').addClass('past');
        };
     }
    
     if (storedEvents !== null){
        //  userEvents = storedEvents;
         for (i=0; i < userEventsLen; i++){
             $('input').text(storedEvents[i])
         }
     }
    //probably don't need this -but looks pretty neat
    $('.storage').on("keyup", function(letters) {
        // (this).text.textContent = letters.target.value;
       text.textContent = letters.target.value;
        $(this).find().closest('p').textContent = letters.target.value;
    })
    // writes items from local storage to page 
   function saveEvents () {
        localStorage.setItem('userInput', JSON.stringify(text.textContent))
    }  
    
    // when save button is clicked - saves everything to local storage
    $(".eventBtn").on('click', function (event) {
        event.preventDefault();
    
        localStorage.setItem('userInput', JSON.stringify(userEvents))
        
    
        saveEvents();
    })
    
    eventsArr();
     // end script
    });
    
   
