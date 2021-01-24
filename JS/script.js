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
    let storedEvents = localStorage.getItem("userInput");

    function eventsArr(){
        userEvents = [];
        for (i = 0; i < userEventsLen; i++){
            userEvents.push("");
        //    $('body').addClass('past');
        };
     }
     //writing the most recent event to the console, get this to write to the input box 
    function writeInput(){
     if (storedEvents !== null){
         console.log(storedEvents)
     }
    }
    //probably don't need this -but looks pretty neat
    $('.storage').on("keyup", function(letters) {
       text.textContent = letters.target.value;
    //   localStorage.setItem('userInput', JSON.stringify(text.textContent))

    })

    
    
    //original function for storing to LS below 
    $(".eventBtn").on('click', function (event) {
            event.preventDefault();
            localStorage.setItem('userInput', text.textContent)
           // localStorage.setItem('userInput', JSON.stringify(userEvents))
            userEvents.push("");
        
        })
        
        eventsArr();
        writeInput();
        // end script
    });
    
    
    
    
        // $(".eventBtn").on("click", function(event){
        //     event.preventDefault();
        //     $('input[type="text"]').each(function(){
        //         let id = $(this).attr('id');
        //         let value = $(this).val();
        //         localStorage.setItem(id,value);
        //     });
        // });
    
        // $("#load").on('click', function(){
        //     $('input[type="text"]').each(function(){
        //         let id=$(this).attr('id');
        //         let value = localStorage.getItem(id);
        //         $(this).val(value);
        //     });
        // });