import * as d3 from 'd3'
import random from 'lodash/random';

class Circle {
    constructor(params) {
        const { x, y, node } = params;
        this.variable = 0;
        this.color = '#fff'
        this.destColor = '#fff'
        this.origX = 0
        this.node = node || 'dom'
        this.y = y || 0
        this.r = 0
        this.transition = null
        this.duration = 0
        this.delay = 0
        this.destX = 0
        this.destY = 0
        this.startDuration = 0
    }

    init() {

        // draw circle 
        this.circle = this.node
            .append('circle')
            .attr("cx", this.origX)
            .attr("cy", this.y)
            .attr("r", 0)
            .style("fill", this.color)
            .style("opacity", 0)
            .transition(this.transition)
            .duration(this.startDuration)
            .attr("r", this.r)
            .style("opacity", random(.4, .9))


        // animate and remove shape when finished
        this.circle.transition(this.transition)
            .ease(this.transition)
            .duration(this.duration)
            .delay(this.delay)
            .attr("cy", this.destY)
            .attr("cx", this.destX)
            .style('fill', this.destColor)
            .style("opacity", random(0, .1))
            .attr("r", this.r / 4)
            .on('end', (d, i, nodes) => {
                d3.select(nodes[i]).remove();
            });
    }
}

export default Circle