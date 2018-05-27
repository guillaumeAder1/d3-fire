import style from './main.css'
import * as d3 from 'd3'
import Source from './Source'
import Light from './Light'

(function init(params) {
    const main = d3.select('#app');
    const stage = main.append('svg')
        .attr("width", '100%')
        .attr("height", '100%')

    const canvasData = stage.node().getBoundingClientRect()
    const fireY = Math.floor(canvasData.height / 2) + 200

    const fire = new Source({
        x: Math.floor(canvasData.width / 2),
        y: fireY,
        node: stage, // dom node
        intensity: 70,// min 0, max 100,
        type: 'flame'
    }).init();

    const smoke = new Source({
        x: Math.floor(canvasData.width / 2),
        y: Math.floor(canvasData.height / 2) - 150,
        node: stage,
        intensity: 30,
        type: 'smoke'
    }).init();

    const light = new Light({
        stage: stage,
        x: Math.floor(canvasData.width / 2),
        y: fireY - 50
    })

})({})
