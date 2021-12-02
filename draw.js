
const funcLib = {
    sin: (x)=> Math.sin(x),
    cos: (x)=> Math.cos(x)
};

function drawCircles(color){
    const size = 200;


    for(let i = 0; i< 60; i++){
        group.append("circle")
            .attr("r", 5)
            .attr("cx", ()=> {
                return funcLib[x_select_el.value](i * x_multiplier) * size;

            })
            .attr("cy", ()=> {
                return funcLib[y_select_el.value](i * y_multiplier) * size;

            })
            .attr("fill", color);

    }
}
drawCircles("coral");