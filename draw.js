
const funcLib = {
    sin: (x)=> Math.sin(x),
    cos: (x)=> Math.cos(x)
};

function drawCircles(color, circle_group, x_select, y_select, x_mul, y_mul){
    circle_group.selectAll("circle").remove();
    const size = window.innerWidth > 500 ? 300: 100;


    for(let i = 0; i< 150; i++){
        const cx = funcLib[x_select.value](i * x_mul) * size
        const cy = funcLib[y_select.value](i * y_mul) * size
        const cx_s = funcLib[x_select.value]((i+0.2) * x_mul) * size
        const cy_s = funcLib[y_select.value]((i+0.2) * y_mul) * size
        circle_group.append("circle")
            .attr("r", 4)
            .attr("cx", cx )
            .attr("cy", cy)
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 4)
            .attr("cx", cx_s)
            .attr("cy", cy_s)
            .attr("fill", color)

        ;

    }
}


drawCircles("steelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);
drawCircles("#ff4910", orange_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);

