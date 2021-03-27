// from data.js
var tableData = data;

// select table element
var tbody = d3.select("tbody");

// build table-loads all sightings 
tableData.forEach(sighting => {
    // iterates all data
    //console.log(sighting);
    //add tr elements
    var row = tbody.append("tr");
    // add td elements fill with values from tableData
    Object.entries(sighting).forEach(function ([key, value]) {
        var cell = row.append("td")
        cell.text(value)
    });
});

// listen events and alter table based on event

// select button elements html lines 35 44 
var button = d3.select("#filter-btn");


// events
button.on("click", handleClick);

// function triggerd by event
function handleClick() {
    // stop auto refresh
    d3.event.preventDefault();
    // filter collection input vars html 40
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    // filter based on user inputs
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData)
    // select table element
    var tbody = d3.select("tbody");
    // start with clean table
    tbody.html("")
    // reuse inital set up to be filtered change var to filtered data
    filteredData.forEach(sighting => {
        // iterates all data
        //console.log(sighting);
        //add tr elements
        var row = tbody.append("tr");
        // add td elements fill with values from tableData
        Object.entries(sighting).forEach(function ([key, value]) {
            var cell = row.append("td")
            cell.text(value)
        });
    });





}
