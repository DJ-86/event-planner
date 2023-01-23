//Selectors
let saveBtn = $('.saveBtn');
let textEls = $('.description');

// Provides the date data using moment.js
let currentDay = moment().format('dddd, MMMM Do YYYY');
// Targets the currentDay html element and sets it's text to the variable currentDay
$('#currentDay').text(currentDay);

let currentHour = moment().format('kk');

// for each element of saveBtn add an event listener that when hit targets the previous html tag
// with a class of .description. The text content and the div id is then saved into local storage
for (const element of saveBtn) {
    element.addEventListener('click', function(){
        let value = $(this).prev('.description').val();
        let key = $(this).prev('.description').attr('id')
        localStorage.setItem(key, value);
    });
}

// loops textEls to compare each element id is greater, less than or equal to the hour  
function pageLogic() {
    for (const element of textEls) {
        let timeNum = Number(element.id);
        if(currentHour > timeNum ) {
            element.classList.add('past');
        } else if (currentHour < timeNum) {
            element.classList.add('future');
        } else {
            element.classList.add('present');
        }
// retrieves local storage data and updates the dom
        $(element).val(localStorage.getItem(element.id))
    }
}

// loads pagelogic on page load
$(document).ready(pageLogic);