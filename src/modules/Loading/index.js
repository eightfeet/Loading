import template from './template/index';
import { createDom, removeDom } from '~/utils/htmlFactory.js';

class Loading {
	constructor(config) {
		const stamp = (new Date()).getTime();
		const {style, id, size, length, cycleTime, parentId, emBase, zIndex} = config || {};
		this.style = style;
		this.id = id || `loading${stamp}-${window.Math.floor(window.Math.random()*100)}`;
		this.counter = 0;
		this.size = size;
		this.parentId = parentId;
		this.length = length;
		this.cycleTime = parseInt(cycleTime, 10) || 0.5;
		this.emBase = emBase;
		this.zIndex = parseInt(zIndex, 10) || 10000;
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
			cycleTime: this.cycleTime,
			parentId: this.parentId,
			zIndex: this.zIndex
		}, this), this.id, this.parentId, this.emBase);
	}

	destory = () => {
		const modalElement = document.getElementById(this.id);
		if (modalElement) {
			removeDom(this.id);
		}
	}
}

export default Loading;