// function to show time hours on the left side of page
//      gray out hours if 'past' hour.. ex 10AM - 9AM will be grayed out
// 
// function for SAVING events to certain hours
// function for saving events to local storage
// func for creating elements?!
// 


//later - fix your buttons 

$(document).ready(function (){

// todays Date / current time 
const currentDate = dayjs().format('MMM dddd, D');
$("#currentDay").text(currentDate);

const currentTime = dayjs().format('h:mm');
$("#currentTime").text(currentTime);


// below creates 'node'list, with id of currentDay/Time/



});