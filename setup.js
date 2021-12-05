
const svg_width = Math.min(window.innerWidth, 1000);
const svg_height = window.innerHeight - 200;
const svg = d3.select("svg");

const dom_svg = document.querySelector("svg")

svg.attr("width", svg_width)
    .attr("height", svg_height);

const padding = 100;
const rc = rough.svg(svg);
const x_axes = rc.line(0 + padding, svg_height/2 , svg_width - padding, svg_height/2,  { bowing: 0, stroke: "grey", strokeWidth: 1 });
const y_axes = rc.line(svg_width / 2, 0 + padding, svg_width/2, svg_height- padding, { bowing: 0, stroke: "grey", strokeWidth: 1 });

dom_svg.appendChild(x_axes);
dom_svg.appendChild(y_axes);

const orange_circle_g = svg.append("g")
    .attr("class", "orange-circles");

const blue_circle_g = svg.append("g")
    .attr("class", "blue-circles");

orange_circle_g.attr("transform", `translate(${svg_width/2}, ${svg_height/2})`);
blue_circle_g.attr("transform", `translate(${svg_width/2}, ${svg_height/2})`);