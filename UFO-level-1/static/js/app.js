// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

/* Table Data */
function buildTable(data) {
  tbody.html("");
  data.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    });
  });

  data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

/* Date Filter */
function handleClick(){
  d3.event.preventDefault()
  var date = d3.select("#datetime").property("value");
  var filterData = tableData;
  if (date){
      filterData = filterData.filter((row) => row.datetime == date);
  }
  buildTable(filterData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
/* End */

buildTable(data);