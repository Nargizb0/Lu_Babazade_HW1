console.log("JS file connected");

// get element with id of 'badge' from DOM using querySelector
const badge = document.querySelector('#badge');

// get button elements from DOM using querySelectorAll in a node list
const buttons = document.querySelectorAll('#button-list button');

// define function 'badgeLogId' which will log the id of the element using 'this' keyword
function badgeLogId() {
    console.log(this.id);
}

// define function 'buttonLogId' which will log the id of the element using 'this' keyword
function buttonLogId() {
    console.log(this.id);
};

// add event listener to the badge element which will call the badgeLogId function when clicked
badge.addEventListener('click', badgeLogId);

// loop through the buttons node list and add an event listener to each
// button element which will call the buttonLogId function when clicked
buttons.forEach(function (button) {
    button.addEventListener('click', buttonLogId);
});

// NOTE FOR CONSOLE LOGS:
// alternatively, we can concatenate a message with the id like this:
// console.log("The id of the element is: " + this.id);
// OR console.log(`The id of the element is: ${this.id}`); (using template literals)
