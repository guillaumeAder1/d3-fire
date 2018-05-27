
import Circle from './Circle'
import random from 'lodash/random';
import { easeLinear } from 'd3'




class Flame extends Circle {
    constructor(params) {
        super(params);

        // random color
        // const listColor = ['rgb(253, 175, 31)', 'rgb(247, 141, 3)', 'orange']
        // this.destColor = listColor[random(2)]
        // this.color = listColor[random(2)]

        const { x, y, node } = params;

        this.destColor = 'rgb(253, 175, 31)'; // end color
        this.color = 'orange'; // start color
        this.variable = 40; // 
        this.node = node // svg dom node
        this.y = y // start posy (2/3 of the screen)
        this.r = random(20, 70)
        this.transition = easeLinear
        this.duration = random(1500, 1700)
        this.delay = random(5)
        this.origX = random(x - this.variable, x + this.variable);
        this.destX = random(x - this.variable / 3, x + this.variable / 3) // destx to be centered
        this.destY = random(y - 250, y - 350); // end y position 
        this.startDuration = 500

        this.init();
    }
}

export default Flame;