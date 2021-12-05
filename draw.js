
const funcLib = {
    sin: (x)=> Math.sin(x),
    cos: (x)=> Math.cos(x)
};

function drawCircles(color, circle_group, x_select, y_select, x_mul, y_mul){
    circle_group.selectAll("circle").remove();

    const size = window.innerWidth > 500 ? 300: 100;
    function getCX(i, increment){
    const index = i + increment;
    return funcLib[x_select.value](index * x_mul) * size

    }
    function getCY(i, increment){
    const index = i + increment;
    return funcLib[y_select.value](index * y_mul) * size

    }


    for(let i = 0; i< 300; i++){
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0))
            .attr("cy", getCY(i, 0))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.1))
            .attr("cy", getCY(i, 0.1))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.2))
            .attr("cy", getCY(i,0.2))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.3))
            .attr("cy", getCY(i,0.3))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.4))
            .attr("cy", getCY(i,0.4))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.5))
            .attr("cy", getCY(i,0.5))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.6))
            .attr("cy", getCY(i,0.6))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.7))
            .attr("cy", getCY(i,0.7))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.8))
            .attr("cy", getCY(i,0.8))
            .attr("fill", color)
        circle_group.append("circle")
            .attr("r", 1)
            .attr("cx", getCX(i, 0.9))
            .attr("cy", getCY(i,0.9))
            .attr("fill", color)

        ;

    }
}


drawCircles("steelblue", blue_circle_g, b_x_select_el, b_y_select_el, b_x_multiplier, b_y_multiplier);
drawCircles("#ff4910", orange_circle_g, c_x_select_el, c_y_select_el, c_x_multiplier, c_y_multiplier);

