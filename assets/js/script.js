// display current date 
var timeDisplayEl = $("#currentDay");
var rightNow = moment().format("dddd, MMMM Do");

timeDisplayEl.text(rightNow);


// format timeBlocks
function checkTime() {
    
    // provides current hour of the day
    var currentHour = moment().hours();
    // console.log('Current Hour', currentHour);

    var timeBlockEl = $(".time-block");

    // checks each timeBlock to determine styling
    timeBlockEl.each(function() {

        // parses id and returns an integer
        var workHour = parseInt($(this).attr("id"));

        // compares integers and adds appropriate classes
        if (currentHour > workHour) {
            $(this).addClass("past");
            // console.log('Status', `${workHour} - Past`);   
        } else if (currentHour === workHour) {
            $(this).addClass("present");
            // console.log('Status', `${workHour} - Present`); 
        } else {
            $(this).addClass("future");
            // console.log('Status', `${workHour} - Future`);  
        }
    })
}

checkTime();


// save data
var saveBtnEl = $(".saveBtn");

saveBtnEl.click(function(event) {   
    event.preventDefault();

    // accessing timeBlock and textarea based on location of saveBtn
    var timeBlockEl = $(this).parent().attr("id");
    var textareaEl = $(this).siblings(".textarea").val().trim();

    // saving data to localStorage
    localStorage.setItem(timeBlockEl, JSON.stringify(textareaEl));
    // console.log(timeBlockEl, textareaEl);

    // display alert when appointment is saved
    var alertEl = $(".alert");
    
    alertEl.addClass("show");
    setTimeout(function () {
        alertEl.removeClass("show");   
    }, 1000);
})


// render data
function renderData() {
    var timeBlockEl = $(".time-block");

    // checks each timeBlock and loads data
    timeBlockEl.each(function() {

        // accessing textarea associated with each timeBlockId
        var timeBlockId = $(this).attr("id");
        var textareaEl = JSON.parse(localStorage.getItem(timeBlockId));

        // if textareaEl has data, data is rendered from localStorage
        if (textareaEl !== null) {
            $(this).children(".textarea").val(textareaEl);
            // console.log(timeBlockId, textareaEl);
        }
    })
}

renderData();
