# Javascript and DOM (Document Object Model) Interactive Dashboard

## I've created an interactive dashboard using Javascript, DOM manipulation, HTML, and CSS. We use a dataset that fan's of The X-Files will be excited about. In this application you will be able to enter a date query to populate a table with data from a local data-file.

There's are four files that work in unison in this app: 
* HTML with the structure of the web dashboard
* CSS file with style elements for the webpage
* Data file of an array of objects in javascript
* Javascript to manipulate the Document Object Model of the HTML

## 3 takeaway concepts concepts 

Identify HTML elements for event listener/handler DOM manipulation.
![html_dom_listener](../images/html-screenshot.jpg)

Event Listener/Handler - Identify the HTML elements/nodes to listen to for changes using the javascript functions:
```javascript
// choose the element 
d3.select("#something)
// define what type of change to look for and what function to do after
.on("someChange", function())
``` 

Identify HTML element to create the output table.

Function to create the table.
```javascript
// create the function for the event handler
function runEnter() {
    
    // prevent the page from refreshing
    d3.event.preventDefault();

    // clear out the tbody html element to populate the new info
    table.html(" ");

    // log with action dispatched the event
    console.log(d3.event.target)

    // store the event in a variable
    var inputValue = form.property("value");
    // log the input value to console
    console.log(`filtered form value: ${inputValue}`);

    var clickValue = button.property("value");
    console.log(`clicked button ${clickValue}`);

    // use .filter() function to filter the data to correspond to the date selected
    // we use the arrow function "=>" to minimize our script for elegance 
    // we use a boolean "===" to check for equality and object type
    var filteredUfo = ufoData.filter(sighting => sighting.datetime == inputValue);
    // log the filtered data to the console
    console.log(filteredUfo);

    // loop function. use ".forEach()" function to iterate through the array of objects
    // with each iteration we add a row and cells from the filtered data
    // we use the arrow function for elegance 
    filteredUfo.forEach(ufo => {
        console.log(ufo);
        // with each iteration we append a row "tr" to the table body element/node and store it as a variable "row"
        var row = table.append("tr");

        // we use "Object.entries()" function to break out the key and value of each entry in the object
        // we iterate through the array of entries with the .forEach() function to populate the HTML table with our script
        Object.entries(ufo).forEach(([key, value]) => {
            console.log(key, value);

            // we use the .append() function to add a "cell" element "td" to the row
            var cell = row.append("td");
            // for each "cell" we will write the value of the iterated object "value"
            cell.text(value);
        })
    })
}
```

The end result should be a table that shows all the UFO data sightings from that date. 

I utilized Bootstrap4 and created a CSS file to create my html for the web dashboard.

### All rights reserved 2020. All code is created and owned by Jay Sueno. If you use his code, please visit his LinkedIn and give him a a skill endorsement in javascript, html, css, and data science. Visit him at:

### https://www.linkedin.com/in/jay-sueno-359a274/
