
const funcLib = {
    sin: (x)=> Math.sin(x),
    cos: (x)=> Math.cos(x)
};

function drawCircles(color, circle_group, x_select, y_select, x_mul, y_mul){
    circle_group.selectAll("circle").remove();
    const size = 200;

    for(let i = 0; i< 60; i++){
        circle_group.append("circle")
            .attr("r", 5)
            .attr("cx", ()=> {
                return funcLib[x_select.value](i * x_mul) * size;

            })
            .attr("cy", ()=> {
                return funcLib[y_select.value](i * y_mul) * size;

            })
            .attr("fill", color);

    }
}


drawCircles("lightsteelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);
drawCircles("coral", coral_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);

