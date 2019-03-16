import template from './template/index';
import { createDom, removeDom } from '~/utils/htmlFactory.js';

class Loading {
	constructor(config) {
		const stamp = (new Date()).getTime();
		const {style, id, size, length, verticesColor, cycle} = config || {};
		this.style = style;
		this.id = id || `modal${stamp}-${window.Math.floor(window.Math.random()*100)}`;
		this.counter = 0;
		this.size = size;
		this.length = length;
		this.verticesColor = verticesColor;
		this.cycle = cycle;
	}

	show = () => {
		this.counter++;
		if (this.counter === 1) {
			this.create();
		}
	}

	hide = () => {
		this.counter = this.counter < 0 ? 0 : this.counter - 1;
		if (this.counter === 0) {
			this.destory();
		}
	}

	reset = () => {
		this.destory();
		this.counter = 0;
	}

	create = () => {
		return createDom(template(this.style, this.size, this.length, this.cycle, this.verticesColor), this.id);
	}

	destory = () => {
		const modalElement = document.getElementById(this.id);
		if (modalElement) {
			removeDom(this.id);
		}
	}
}

export default Loading;