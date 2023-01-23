/* * Display the current day at the top of the calender when a user opens the planner.

* Present timeblocks for standard business hours when the user scrolls down.

* Color-code each timeblock based on past, present, and future when the timeblock is viewed.

* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

The following animation demonstrates the application functionality: */
let saveBtn = $('.saveBtn')
let textEls = $('.description')
console.log(textEls);
let currentDay = moment().format('dddd, MMMM Do YYYY')
$('#currentDay').text(currentDay);

// change bootstrap class depending upon time past present future//
let currentHour = moment().format('kk');

function storageFunc () {
    let value = localStorage.getItem('userInput')
    
    localStorage.setItem('userInput', myEl);
    console.log('storageFunc')
    
}
function eventListeners() {
for (const element of saveBtn) {
    element.addEventListener('click', storageFunc());
    }
}

function pageLogic() {
    for (const element of textEls) {
        myEl = element.textContent;
        console.log(`myEl ${myEl}`)
        let timeNum = Number(element.id)
        console.log(timeNum)
        if(currentHour > timeNum ) {
            element.classList.add('past');
            console.log('class added')
        } else if (currentHour < timeNum) {
            element.classList.add('future')  
        } else {
            element.classList.add('present');
        }
    }
    return myEl;
}

window.eventListeners('load', pageLogic())