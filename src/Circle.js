import * as d3 from 'd3'
import random from 'lodash/random';

class Circle {
    constructor(params) {
        const { x, y, node } = params;
        this.variable = 40;
        this.color = '#fff'
        this.destColor = '#fff'

    }

    init(d) {

        // draw circle 
        this.circle = d.node
            .append('circle')
            .attr("cx", d.x)
            .attr("cy", d.y)
            .attr("r", 0)
            .style("fill", this.color)
            .style("opacity", 0)
            .transition()
            .duration(500)
            .attr("r", d.r)
            .style("opacity", random(.4, .9))


        // animate go up
        this.circle.transition()
            .ease(d.transition)
            .duration(d.duration)
            .delay(d.delay)
            .attr("cy", random(100, 150))
            .attr("cx", d.destX)
            .style('fill', this.destColor)
            .style("opacity", random(0, .1))
            .attr("r", d.r / 4)
            .on('end', (d, i, nodes) => {
                d3.select(nodes[i]).remove();
            });

    }
}

export default Circle