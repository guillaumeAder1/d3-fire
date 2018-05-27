
import Circle from './Circle'
import random from 'lodash/random';
import { easeLinear } from 'd3'




class Smoke extends Circle {
    constructor(params) {
        super(params);

        const { x, y, node } = params;

        this.destColor = 'rgba(185, 185, 185, 0.05)'; // end color
        this.color = 'rgba(185, 185, 185, 0.1)'; // start color
        this.variable = 40; // 
        this.node = node // svg dom node
        this.y = random(y - 350, y) // start posy (2/3 of the screen)
        this.r = random(5, 20)
        this.transition = easeLinear
        this.duration = random(1500, 1700)
        this.delay = random(5)
        this.origX = random(x - this.variable / 3, x + this.variable / 3);
        this.destX = random(x - this.variable, x + this.variable) // destx to be centered
        this.destY = random(y - 200, y - 250); // end y position 
        this.startDuration = 1000
        this.init();
    }
}

export default Smoke;