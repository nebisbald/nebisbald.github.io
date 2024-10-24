import * as d3 from "d3";

function calculateBMI(feet, inches, pounds){
  if(feet == '' || inches == '' || pounds == ''){
    console.log('empty');
    return 0;
  }
  else{
    feet = feet * 12;
    inches = (inches*1) + feet;
    inches  = inches * inches;
    return Math.round((pounds/inches) * 703);
  }
  
}

function calculatePYLL(BMI){
  if(BMI == 0){
    return 0;
  }
  else if(BMI < 26){
    return 0;
  }
  else if(BMI < 32){
    return 1;
  }
  else if(BMI < 35){
    return 2;
  }
  else if(BMI < 39){
    return 3;
  }
  else if(BMI < 41){
    return 4;
  }
  else if(BMI < 44){
    return 5;
  }
  else if(BMI < 45){
    return 6;
  }
  else{
    return 8;
  }
}

function generateGraph(event){
  event.preventDefault();

  const feet = document.getElementById('feet').value;
  const inches = document.getElementById('inches').value;
  const pounds = document.getElementById('pounds').value;
  const BMI = calculateBMI(feet, inches, pounds);
  const PYLL = calculatePYLL(BMI);
  pylls[`${BMI} BMI`] = PYLL;
  const sortedPYLLs = sortList(pylls);
  
  var margin = {top: 10, right: 40, bottom: 150, left: 90},
    width = 1100 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;


let sVg = d3.select("#datafield").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var x = d3.scaleBand().domain(sortedPYLLs).range([0, width]); 

sVg.append('g').attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end").style("font-size", "16pt");

var y = d3.scaleLinear().domain([0, 16]).range([height, 0]); 

sVg.append('g').call(d3.axisLeft(y)).style("font-size", "16pt");

sVg.append("text").attr("class", "y label").attr("text-anchor", "end").attr("y", 6).attr("dy", ".75em").attr("transform", "rotate(-90)").text("Average Years of Life Lost").style("font-size", "18pt");


sVg.selectAll("mybar").data(sortedPYLLs).enter().append("rect").attr('x', 
  function(d){
    return x(d);
  
}).attr('y', 
  function(d) {
  return y(pylls[d]);
}).attr("width", x.bandwidth() - 2).attr("height", 
  function(d){
  return height - y(pylls[d]);
}).attr("fill", 
  function(d){
  if(d == `${BMI} BMI`){
    return "#7e6acb";
  }
  else{
    return "#69b7ca";
  }
});


}

function sortList(data){
  var items = Object.keys(data).map(
    (key) => { return [key, data[key]] });
  
  // Step - 2
  // Sort the array based on the second element (i.e. the value)
  items.sort(
    (first, second) => { return first[1] - second[1] }
  );
  
  // Step - 3
  // Obtain the list of keys in sorted order of the values.
  var keys = items.map(
    (e) => { return e[0] });
  
  return keys;
}


const form = document.querySelector('form');

form.addEventListener('submit', generateGraph);


const pylls = {
  'Black Men': 6.18,
  'Black Women': 7.53, 
  'White Women': 3.76,
  'White Men': 6.22,
  'All Demographics': 5.80,
  'Hispanic Men': 12.46,
  'Hispanic Women': 7.58,
  'Indigenous Women': 10.72,
  'Indigenous Men': 14.24,
  'Asian Men': 6.36,
  'Asian Women': 3.96,
  //'Smokers': 23,
  //'Traffic Deaths': 8.85,
  //'Covid-10': 12.56
};

