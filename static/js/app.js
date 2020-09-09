// from data.js
var ufoData = data;

// YOUR CODE HERE!
console.log(data)

// create listeners for both the entry form and the button
// these variables will "listen" to an action that happens to that html element
var button = d3.select("#filter-btn");
console.log(button.html())
var form = d3.select(".form-control");
console.log(form.html())

// select the HTML node/element for the table body
var table = d3.select("tbody")

// create "event handlers" for each of the button and the form
// ".on('event', function)" will run a function based on an event that happens with the listener variable
button.on("click", runEnter);
form.on("change", runEnter);

// create the function for the event handler
function runEnter() {
    
    // prevent the page from refreshing
    d3.event.preventDefault();

    // log with action dispatched the event
    console.log(d3.event.target)

    // store the event in a variable
    var inputValue = form.property("value");
    console.log(`filtered form value: ${inputValue}`);
    var clickValue = button.property("value");
    console.log(`clicked button ${clickValue}`);

    // filter the data to correspond to the date selected
    var filteredData = ufoData.filter(sighting => sighting.datetime == inputValue);
    console.log(filteredData);
}