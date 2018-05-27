import Flame from './Flame'
import Smoke from './Smoke'


/**
 * @param {int} x - xpos
 * @param {int} y - ypos
 * @param {HTMLElement} node - SVG or Group DOM node 
 * @param {int} intensity - delay before creating a new circle instance
 */
class Source {

    constructor(params) {
        const { x, y, node, type } = params
        this.intensity = params.intensity
        this.x = x;
        this.y = y
        this.node = node
        this.type = type
        this.defaultDirection = 100
        return this;
    }

    init() {
        switch (this.type) {
            case 'flame':
                setInterval(() => {
                    let fire = new Flame({
                        x: this.x,
                        y: this.y,
                        node: this.node,
                        intensity: 20,
                        direction: this.defaultDirection
                    })
                }, this.calcIntensity(this.intensity));
                break;
            case 'smoke':
                setInterval(() => {
                    let fire = new Smoke({
                        x: this.x,
                        y: this.y,
                        node: this.node,
                        intensity: 5,
                        direction: this.defaultDirection
                    })
                }, this.calcIntensity(this.intensity));

                break;

            default:
                break;
        }

        return this;
    }

    calcIntensity(val) {
        return (100 - val) / 1.5
    }
}


export default Source