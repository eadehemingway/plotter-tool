
const b_x_select_el = document.querySelector("#blue-x-input");
const b_x_input_el = document.querySelector("#blue-x-input-multiple");
const b_x_str_display = document.querySelector("#blue-x-str-display");
b_x_select_el.value = "cos";
let b_x_multiplier = 1;


b_x_select_el.addEventListener("change", (e)=> {
    updateStrDisplay(b_x_str_display, e.target.value, b_x_multiplier);
    drawCircles("lightsteelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);
});
b_x_input_el.addEventListener("keyup", (e)=> {
    b_x_multiplier =  Number(e.target.value) || 1;
    updateStrDisplay(b_x_str_display, b_x_select_el, b_x_multiplier);
    drawCircles("lightsteelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);

});


// y ----
const b_y_select_el = document.querySelector("#blue-y-input");
const b_y_input_el = document.querySelector("#blue-y-input-multiple");
const b_y_str_display = document.querySelector("#blue-y-str-display");
let b_y_multiplier = 1;
b_y_select_el.value = "cos";

b_y_select_el.addEventListener("change", (e)=> {
    updateStrDisplay(b_y_str_display, e.target.value, b_y_multiplier);
    drawCircles("lightsteelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);


});
b_y_input_el.addEventListener("keyup", (e)=> {
    b_y_multiplier =  Number(e.target.value) || 1;
    updateStrDisplay(b_y_str_display, b_y_select_el, b_y_multiplier);
    drawCircles("lightsteelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);

});

function updateStrDisplay(display, func, multiplier){
    const m = multiplier === 1 ? "" : `* ${multiplier}`;
    display.textContent = `y = ${func.value}(θ ${ m})`;
}


updateStrDisplay(b_y_str_display, b_y_select_el, b_y_multiplier);
updateStrDisplay(b_x_str_display, b_x_select_el, b_x_multiplier);