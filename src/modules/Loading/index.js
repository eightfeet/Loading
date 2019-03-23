import template from './template/index';
import s from './template/Loading.scss';
import { createDom, removeDom } from '~/utils/htmlFactory.js';

class Loading {
	constructor(config) {
		const stamp = (new Date()).getTime();
		const {style, id, size, length, verticesColors, cycle, parentId} = config || {};
		this.style = style;
		this.verticesColorStyle = style.verticesColors || null;
		this.id = id || `loading${stamp}-${window.Math.floor(window.Math.random()*100)}`;
		this.counter = 0;
		this.size = size;
		this.parentId = parentId;
		this.length = length;
		this.verticesColors = verticesColors;
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
		return createDom(template({
			style: this.style,
			size: this.size,
			length: this.length,
			cycle: this.cycle,
			parentId: this.parentId,
			verticesColor: this.verticesColor || this.verticesColorStyle
		}), this.id, this.parentId).then(() => setTimeout(() => {
			const dom = document.getElementById(this.id)
				.querySelector(`.${s.uildefaultcss}`);
			dom.style.opacity = 1;
		}), 100);
	}

	destory = () => {
		const modalElement = document.getElementById(this.id);
		if (modalElement) {
			removeDom(this.id);
		}
	}
}

export default Loading;