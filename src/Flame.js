
import Circle from './Circle'
import random from 'lodash/random';



class Flame extends Circle {
    constructor(params) {
        super(params);
        this.destColor = 'rgb(253, 175, 31)';
        this.color = 'orange';
        this.variable = 40;
        const { x, y, node } = params;
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
        this.init(params.x, params.y, params.node);
    }
}

export default Flame;