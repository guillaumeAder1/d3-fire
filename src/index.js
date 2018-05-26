import style from './main.css'
import * as d3 from 'd3'
import Source from './Source'




(function init(params) {
    const main = d3.select('#app');
    const stage = main.append('svg')
        .attr("width", '100%')
        .attr("height", '100%')

    const canvasData = stage.node().getBoundingClientRect()


    const fire = new Source({
        x: Math.floor(canvasData.width / 2),
        y: Math.floor(canvasData.height / 2) + 150,
        node: stage, //
        intensity: 70 // min 0, max 100
    })


})({})