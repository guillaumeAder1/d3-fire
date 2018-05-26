import * as d3 from 'd3'
import Flame from './Flame'


/**
 * @param {int} x - xpos
 * @param {int} y - ypos
 * @param {HTMLElement} node - SVG or Group DOM node 
 * @param {int} intensity - delay before creating a new circle instance
 */
class Source {

    constructor(params) {
        const { x, y, node } = params
        this.intensity = params.intensity
        this.init(params)
    }

    init(params) {

        const { x, y, node } = params;

        setInterval(() => {
            let fire = new Flame({
                x: x,
                y: y,
                node: node,
                intensity: 20
            })
        }, this.calcIntensity(this.intensity));

    }

    calcIntensity(val) {
        return (100 - val) / 1.5
    }
}


export default Source