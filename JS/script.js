$(document).ready(function () {

    // time date functions
    const currentDate = dayjs().format('MMM D, dddd');
        $("#currentDay").text(currentDate);
            
    const currentTime = dayjs().format('h:mm');
        $("#currentTime").text(currentTime);

    let text = document.querySelector('.text')
    let timeBlocks = document.querySelector('.form')
    
    //----------READ ME------------
    // if time has passed, loop over 'userevents' (empty array), and add classes to past times (use data-index in html)
    //read docs
    //----------READ ME------------

    function changeTime(){
       // let hour = dayjs().format('h');
        
        for (i=0; i <= 23; i++) {
            timeBlocks = i;
            hour = dayjs().format('h');
            if (hour > i){
                $(".form").addClass('past');
            }
            else if (hour === i){
                $(".form").addClass('present')
            }
            else if (hour < i){
                $(".form").addClass('future')
            }
        }
    }


    let userEvents = [];
    let userEventsLen = 9;
    let storedEvents = localStorage.getItem("userInput");

    function eventsArr(){
        userEvents = [];
        for (i = 0; i < userEventsLen; i++){
            userEvents.push("");
    
        };
     }
     //writing the most recent event to the console, get this to write to the input box 
    function writeInput(){
     if (storedEvents !== null){
         console.log(storedEvents)
         // something wrong in this line 
       // document.getElementsByClassName("form").innerHTML = storedEvents.value;

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
        changeTime();
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