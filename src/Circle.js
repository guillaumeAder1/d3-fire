import * as d3 from 'd3'
import random from 'lodash/random';

class Circle {
    constructor(params) {
        const { x, y, node } = params;
        this.variable = 40;
        this.color = '#fff'
        this.destColor = '#fff'

    }

    init(x, y, node) {
        const origX = random(x - this.variable, x + this.variable);
        const origY = y;

        const d = {
            x: origX,
            y: origY,
            r: random(20, 70),
            delay: random(5),
            duration: random(1500, 1700),
            destX: random(x - this.variable / 3, x + this.variable / 3),
        }
        // draw circle 
        this.circle = node
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
            .ease(d3.easeLinear)
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