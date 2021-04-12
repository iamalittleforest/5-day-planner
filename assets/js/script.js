// display current date 
var timeDisplayEl = $('#currentDay');
var rightNow = moment().format('dddd, MMMM Do');

timeDisplayEl.text(rightNow);


// format timeBlocks
function checkTime() {
    
    // provides current hour of the day
    var currentHour = moment().hours();
    // console.log('Current Hour', currentHour);

    var timeBlockEl = $('.time-block');

    // checks each timeblock to determine styling
    timeBlockEl.each(function() {

        // parses id from schedule and returns an integer
        var workHour = parseInt($(this).attr('id'));

        // compares integers and adds appropriate classes
        if (currentHour > workHour) {
            $(this).addClass('past');
            // console.log('Status', `${workHour} - Past`);   
        } else if (currentHour === workHour) {
            $(this).addClass('present');
            // console.log('Status', `${workHour} - Present`); 
        } else {
            $(this).addClass('future');
            // console.log('Status', `${workHour} - Future`);  
        }
    })
}

checkTime();


// save text
var saveBtnEl = $('.saveBtn');

saveBtnEl.click(function(event) {   
    event.preventDefault();

    // accessing timeBlock and textarea based on location of saveBtn
    var timeBlockEl = $(this).parent().attr('id');
    var textareaEl = $(this).siblings('.textarea').val().trim();

    // saving input to local storage
    localStorage.setItem(timeBlockEl, JSON.stringify(textareaEl));
    // console.log(timeBlockEl, textareaEl);
})