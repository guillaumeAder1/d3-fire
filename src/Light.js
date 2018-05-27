import random from 'lodash/random';

class Light {
    constructor(params) {

        this.durmax = 500
        this.durmin = 300
        this.rmax = 300
        this.rmin = 250
        this.direction = params.direction
        this.x = params.x
        this.init(params)
    }

    init(params) {



        const svg = params.stage
            .append("g");

        const radialGradient = svg.append("defs")
            .append("radialGradient")
            .attr("id", "radial-gradient");

        radialGradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", 'rgba(255,255,255,0.5)');

        radialGradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", 'rgba(41,41,41,0)'); // body bg color transparency...

        this.circle = svg.append("circle")
            .attr("cx", params.x + this.direction)
            .attr("cy", params.y)
            .attr("r", 300)
            .style("opacity", 0)

        this.circle.transition()
            .duration(3000)
            .style("opacity", 1.0)
            .style("fill", "url(#radial-gradient)")
            .on('end', () => {
                this.repeat()
            })
    }

    repeat() {
        this.circle.transition()
            .duration(random(this.durmin, this.durmax))
            .attr('cx', this.x + this.direction)
            .attr('r', random(this.rmin, this.rmin - 20))
            .transition()
            .duration(random(this.durmin, this.durmax))
            .attr('cx', this.x + this.direction)
            .attr('r', random(this.rmax - 50, this.rmax))
            .on('end', () => this.repeat())
    }
}

export default Light;