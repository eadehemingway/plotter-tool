

const svg_width = Math.min(window.innerWidth, 1000);
const svg_height = window.innerHeight - 200;
const svg = d3.select("svg");

svg.attr("width", svg_width)
    .attr("height", svg_height);

const padding = 100;

svg.append("line")
    .attr("x1", 0 + padding)
    .attr("x2", svg_width - padding)
    .attr("y1", svg_height / 2)
    .attr("y2", svg_height/2)
    .attr("stroke", "sienna");

svg.append("line")
    .attr("y1", 0 + padding)
    .attr("y2", svg_height- padding)
    .attr("x1", svg_width / 2)
    .attr("x2", svg_width/2)
    .attr("stroke", "sienna");

const coral_circle_g = svg.append("g")
    .attr("class", "coral-circles");

const blue_circle_g = svg.append("g")
    .attr("class", "blue-circles");

coral_circle_g.attr("transform", `translate(${svg_width/2}, ${svg_height/2})`);
blue_circle_g.attr("transform", `translate(${svg_width/2}, ${svg_height/2})`);