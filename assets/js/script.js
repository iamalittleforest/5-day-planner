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

    // accessing timeBlock and description based on location of saveBtn
    var timeBlockEl = $(this).parent().attr("id");
    var descriptionEl = $(this).siblings(".description").val().trim();

    // saving data to localStorage
    localStorage.setItem(timeBlockEl, JSON.stringify(descriptionEl));
    // console.log(timeBlockEl, descriptionEl);

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

        // accessing description associated with each timeBlockId
        var timeBlockId = $(this).attr("id");
        var descriptionEl = JSON.parse(localStorage.getItem(timeBlockId));

        // if descriptionEl has data, data is rendered from localStorage
        if (descriptionEl !== null) {
            $(this).children(".description").val(descriptionEl);
            // console.log(timeBlockId, descriptionEl);
        }
    })
}

renderData();
