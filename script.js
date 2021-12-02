
const x_select_el = document.querySelector("#x-input");
const x_input_el = document.querySelector("#x-input-multiple");
const x_str_display = document.querySelector("#x-func-str-display");
x_select_el.value = "sin";
let x_multiplier = 1;


x_select_el.addEventListener("change", (e)=> {
    updateStrDisplay(x_str_display, e.target.value, x_multiplier);
    removeCircles();
    drawCircles();
});
x_input_el.addEventListener("keyup", (e)=> {
    x_multiplier =  Number(e.target.value) || 1;
    updateStrDisplay(x_str_display, x_select_el, x_multiplier);
    removeCircles();
    drawCircles();
});


// y ----
const y_select_el = document.querySelector("#y-input");
const y_input_el = document.querySelector("#y-input-multiple");
const y_str_display = document.querySelector("#y-func-str-display");
let y_multiplier = 1;
y_select_el.value = "cos";

y_select_el.addEventListener("change", (e)=> {
    updateStrDisplay(y_str_display, e.target.value, y_multiplier);
    removeCircles();
    drawCircles();

});
y_input_el.addEventListener("keyup", (e)=> {
    y_multiplier =  Number(e.target.value) || 1;
    updateStrDisplay(y_str_display, y_select_el, y_multiplier);
    removeCircles();
    drawCircles();
});





function removeCircles(){
    group.selectAll("circle").remove();
}

function updateStrDisplay(display, func, multiplier){
    const m = multiplier === 1 ? "" : `* ${multiplier}`;
    display.textContent = `y = ${func.value}(θ ${ m})`;
}


updateStrDisplay(y_str_display, y_select_el, y_multiplier);
updateStrDisplay(x_str_display, x_select_el, x_multiplier);