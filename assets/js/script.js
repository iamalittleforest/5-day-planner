var timeDisplayEl = $('#currentDay');

var rightNow = moment().format('dddd, MMMM Do');
timeDisplayEl.text(rightNow);

// function checkTime () {
//     if (moment().isBefore(#row-id)) {
//         $(this).addClass('future');
//     } else if (moment().isAfter(#row-id)) {
//         $(this).addClass('past');
//     } else {
//         $(this).addClass('present');
//     }
// }
