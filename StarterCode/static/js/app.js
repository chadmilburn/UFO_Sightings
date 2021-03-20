// from data.js
var tableData = data;

// select table element
var tbody = d3.select("tbody");

// build table
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

