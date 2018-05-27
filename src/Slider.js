class Slider {

    constructor(params) {

        this.node = document.querySelector(params.node) || document.querySelector('body');
        this.slider = document.createElement("INPUT");
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("id", params.id);
        this.slider.setAttribute("min", params.min);
        this.slider.setAttribute("max", params.max);
        this.slider.setAttribute("value", params.value);

        this.slider.addEventListener('change', (e) => {
            console.log(e.target.value)
            params.callback(e.target.value)
        })

        this.node.appendChild(this.slider);


    }

}

export default Slider;