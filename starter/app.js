let saveBtn = $('.saveBtn');
let textEls = $('.description');
console.log(textEls);
let currentDay = moment().format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

// change bootstrap class depending upon time past present future//
let currentHour = moment().format('kk');


for (const element of saveBtn) {
    element.addEventListener('click', function(){
        let value = $(this).prev('.description').val();
        let key = $(this).prev('.description').attr('id')
        localStorage.setItem(key, value);
    });
}

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
        $(element).val(localStorage.getItem(element.id))
    }
}

$(document).ready(pageLogic);