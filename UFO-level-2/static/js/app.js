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

/* Reset Button */
function handleClickr(){
  buildTable(data);
}
d3.selectAll("#reset-btn").on("click", handleClickr);
/* End */

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

/* City Filter */
function handleClick1(){
  d3.event.preventDefault()
  var city = d3.select("#city").property("value");
  var filterData = tableData;
  if (city){
      filterData = filterData.filter((row) => row.city == city);
  }
  buildTable(filterData);
}
d3.selectAll("#filter-btn-city").on("click", handleClick1);
/* End */

/* State Filter */
function handleClick2(){
  d3.event.preventDefault()
  var state = d3.select("#state").property("value");
  var filterData = tableData;
  if (state){
      filterData = filterData.filter((row) => row.state == state);
  }
  buildTable(filterData);
}
d3.selectAll("#filter-btn-state").on("click", handleClick2);
/* End */

/* Country Filter */
function handleClick3(){
  d3.event.preventDefault()
  var country = d3.select("#country").property("value");
  var filterData = tableData;
  if (city){
      filterData = filterData.filter((row) => row.country == country);
  }
  buildTable(filterData);
}
d3.selectAll("#filter-btn-country").on("click", handleClick3);
/* End Test */

/* Button Filters */

// Circle
function shape1(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape1").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape1").on("click", shape1);

// Light
function shape2(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape2").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape2").on("click", shape2);

// Triangle
function shape3(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape3").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape3").on("click", shape3);

// Fireball
function shape4(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape4").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape4").on("click", shape4);

// Formation
function shape5(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape5").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape5").on("click", shape5);

// Sphere
function shape6(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape6").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape6").on("click", shape6);

// Disk
function shape7(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape7").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape7").on("click", shape7);

// Cross
function shape8(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape8").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape8").on("click", shape8);

// Changing
function shape9(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape9").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape9").on("click", shape9);

// Oval
function shape10(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape10").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape10").on("click", shape10);

// Teardrop
function shape11(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape11").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape11").on("click", shape11);

// Chevron
function shape12(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape12").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape12").on("click", shape12);

// Cylinder
function shape13(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape13").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape13").on("click", shape13);

// Rectangle
function shape14(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape14").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape14").on("click", shape14);

// Flash
function shape15(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape15").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape15").on("click", shape15);

// Cigar
function shape16(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape16").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape16").on("click", shape16);

// Unknown
function shape17(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape17").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape17").on("click", shape17);

// Other
function shape18(){
  d3.event.preventDefault()  
  var shape = d3.select("#shape18").text();
  console.log(shape)
  var filterData = tableData;
  if (shape){
      filterData = filterData.filter((row) => row.shape == shape);
  }
  buildTable(filterData);
}
d3.selectAll("#shape18").on("click", shape18);
/* End Filter*/

buildTable(data);