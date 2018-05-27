import style from './main.css'
import {select} from 'd3-selection'
import Source from './Source'
import Light from './Light'
import Slider from './Slider'

(function init(params) {
    const main = select('#app');
    const stage = main.append('svg')
        .attr('id', 'svgStage')
        .attr("width", '100%')
        .attr("height", '100%')

    const canvasData = stage.node().getBoundingClientRect()
    const fireY = Math.floor(canvasData.height / 2) + 200

    const defaultWind = 0

    // add wind direction slider
    const wind = new Slider({
        node: '#app',
        id: 'wind-slider',
        min: "-200",
        max: "200",
        value: defaultWind,
        callback: (value) => {
            fire.defaultDirection = Number(value)
            smoke.defaultDirection = Number(value)
            light.direction = Number(value) / 3
        }
    })

    const fire = new Source({
        x: Math.floor(canvasData.width / 2),
        y: fireY,
        node: stage, // dom node
        intensity: 70,// min 0, max 100,
        type: 'flame',
        direction: defaultWind
    }).init();

    const smoke = new Source({
        x: Math.floor(canvasData.width / 2),
        y: Math.floor(canvasData.height / 2) - 150,
        node: stage,
        intensity: 30,
        type: 'smoke',
        direction: defaultWind
    }).init();

    const light = new Light({
        stage: stage,
        x: Math.floor(canvasData.width / 2),
        y: fireY - 50,
        direction: defaultWind
    })

})({})
