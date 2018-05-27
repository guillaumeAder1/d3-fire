
import Circle from './Circle'
import random from 'lodash/random';
import { easeLinear } from 'd3'




class Flame extends Circle {
    constructor(params) {
        super(params);

        // random colro
        // const listColor = ['rgb(253, 175, 31)', 'rgb(247, 141, 3)', 'orange']
        // this.destColor = listColor[random(2)]
        // this.color = listColor[random(2)]

        this.destColor = 'rgb(253, 175, 31)';
        this.color = 'orange';

        this.variable = 40;

        const { x, y, node } = params;
        const origX = random(x - this.variable, x + this.variable);


        const data = {
            node: node,
            x: origX,
            y: y,
            r: random(20, 70),
            delay: random(5),
            duration: random(1500, 1700),
            destX: random(x - this.variable / 3, x + this.variable / 3),
            transition: easeLinear
        }
        this.init(data);
    }
}

export default Flame;