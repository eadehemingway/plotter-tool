

const svg = d3.select("svg");
const svg_width = 1000;
const svg_height = 700;

svg.attr("width", svg_width)
    .attr("height", svg_height)
    .style("border", "2px solid white");

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

const group = svg.append("g")
    .attr("class", "circles");

const x_input = document.querySelector("#x-input");
const y_input = document.querySelector("#y-input");
const x_input_multiple = document.querySelector("#x-input-multiple");
const y_input_multiple = document.querySelector("#y-input-multiple");

let x_func = "sin";
let x_input_mul_num = 1;
x_input.addEventListener("change", (e)=> {
    x_func =  e.target.value;
    updateXStrDisplay();
    removeCircles();
    drawCircles();
});
x_input_multiple.addEventListener("change", (e)=> {
    x_input_mul_num =  Number(e.target.value) || 1;
    updateXStrDisplay();

    removeCircles();
    drawCircles();
});
let y_func = "cos";
let y_input_mul_num = 1;
y_input.addEventListener("change", (e)=> {
    y_func = e.target.value;
    updateYStrDisplay();
    removeCircles();
    drawCircles();

});
y_input_multiple.addEventListener("change", (e)=> {
    y_input_mul_num =  Number(e.target.value) || 1;
    updateYStrDisplay();
    removeCircles();
    drawCircles();
});
const size = 200;

const funcLib = {
    sin: (x)=> Math.sin(x),
    cos: (x)=> Math.cos(x)
};

function removeCircles(){
    group.selectAll("circle").remove();
}
const x_func_str_display_p = document.querySelector("#x-func-str-display");

function updateXStrDisplay(){
    const multiple = x_input_mul_num === 1 ? "" : `* ${x_input_mul_num}`;

    x_func_str_display_p.textContent = `${x_func}(u${ multiple})`;
}

const y_func_str_display_p = document.querySelector("#y-func-str-display");

function updateYStrDisplay(){
    const multiple = y_input_mul_num === 1 ? "" : `* ${y_input_mul_num}`;
    y_func_str_display_p.textContent = `${y_func}(u${ multiple})`;
}

function drawCircles(){


    for(let i = 0; i< 60; i++){

        group.append("circle")
            .attr("r", 5)
            .attr("cx", ()=> {
                return funcLib[x_func](i * x_input_mul_num) * size;

            })
            .attr("cy", ()=> {
                return funcLib[y_func](i * y_input_mul_num) * size;
            })
            .attr("fill", "coral");

    }
}
drawCircles();
group.attr("transform", `translate(${svg_width/2}, ${svg_height/2})`);


function setInitialValues(){
    x_input.value = "sin";
    y_input.value = "cos";
    updateYStrDisplay();
    updateXStrDisplay();
}
setInitialValues();