const color = "#ff4910";
const c_x_select_el = document.querySelector("#orange-x-input");
const c_x_input_el = document.querySelector("#orange-x-input-multiple");
const c_x_str_display = document.querySelector("#orange-x-str-display");
c_x_select_el.value = "sin";
let c_x_multiplier = 1;


c_x_select_el.addEventListener("change", (e)=> {
    updateStrDisplay("x", c_x_str_display, e.target.value, c_x_multiplier);
    drawCircles(color, orange_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);

});
c_x_input_el.addEventListener("keyup", (e)=> {
    c_x_multiplier =  Number(e.target.value) || 1;
    updateStrDisplay("x", c_x_str_display, c_x_select_el, c_x_multiplier);
    drawCircles(color, orange_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);


});


// y ----
const c_y_select_el = document.querySelector("#orange-y-input");
const c_y_input_el = document.querySelector("#orange-y-input-multiple");
const c_y_str_display = document.querySelector("#orange-y-str-display");
let c_y_multiplier = 1;
c_y_select_el.value = "cos";

c_y_select_el.addEventListener("change", (e)=> {
    updateStrDisplay("y", c_y_str_display, e.target.value, c_y_multiplier);
    drawCircles(color, orange_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);


});
c_y_input_el.addEventListener("keyup", (e)=> {
    c_y_multiplier =  Number(e.target.value) || 1;
    updateStrDisplay("y", c_y_str_display, c_y_select_el, c_y_multiplier);
    drawCircles(color, orange_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);

});


function updateStrDisplay(axes, display, func, multiplier){
    const m = multiplier === 1 ? "" : `* ${multiplier}`;
    display.textContent = `${axes} = ${func.value}(θ ${ m})`;
}


updateStrDisplay("y", c_y_str_display, c_y_select_el, c_y_multiplier);
updateStrDisplay("x", c_x_str_display, c_x_select_el, c_x_multiplier);