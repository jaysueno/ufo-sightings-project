# Javascript and DOM (Document Object Model) Interactive Dashboard

## I've created an interactive dashboard using Javascript, DOM manipulation, HTML, and CSS. We use a dataset that fan's of The X-Files will be excited about. In this application you will be able to enter a date query to populate a table with data from a local data-file.

There's are three files that work in unison in this app: 
* HTML with the structure of the web dashboard
* Data file of an array of objects in javascript
* Javascript to manipulate the Document Object Model of the HTML

## 3 takeaway concepts concepts 

Identify HTML elements for event listener/handler DOM manipulation
![html_dom_listener](../Images/html-screenshot.jpg)

Event Listener/Handler - Identify the HTML elements/nodes to listen to for changes using the javascript functions:
```javascript
// choose the element 
d3.select("#something)
// define what type of change to look for and what function to do after
.on("someChange", function())
``` 




I tested my code in a Jupyter Notebook - mission_to_mars.ipynb. I then migrated that code into my scrape function. 

The scrape function uses a route called "/scrape" and returns the scraped Mars data in a dictionary format. 

In the flask app I created two routes. The first is the index/home "/". This route connects to the mongodb and pulls the mars_data collection. It then directs that data to populate and in the html file to it's desired rendering. The sceond route "/scrape" is for the actual scraping of the data. I calls the .scrape() function's dictionary output. It takes that dictionary and uploads it into the mongodb server on my local drive. It then redirects back to the home/index route to render the dashboard with the latest data scrape. 

I utilized Bootstrap4  to create my html for the web dashboard. I used jinga command syntax to call the data from the mongodb. 

### All rights reserved 2020. All code is created and owned by Jay Sueno. If you use his code, please visit his LinkedIn and give him a a skill endorsement in python and data science. Visit him at:

### https://www.linkedin.com/in/jay-sueno-359a274/
