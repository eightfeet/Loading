import s from './Loading.scss';
import { inlineStyle, fixpx } from '~/utils/tools';

/**
 *
 * 计算等差数组
 * @param {Number} a1
 * @param {Number} an
 * @param {Number} length
 * @returns
 */
function getArr(a1, an, length){
	const d = (an - a1)/(length-1);
	const arr = [];
	for (let index = 0; index < length; index++) {
		   arr.push(index*d+a1);
	   }
	return arr;
}

export default function ({style, size, length, cycle, parentId}) {
	const parentIdDom = document.getElementById(parentId);
	const { overlay, content, vertices } = style || {};
	const { elements } = vertices || {};

	let colorArray = [];
	let oprationLength = parseInt(length, 10) || 12;

	if (Array.isArray(elements)) {
		colorArray = elements;
		if (colorArray.length > 0) {
			oprationLength = colorArray.length;
		}
	} else if (Number.parseInt(elements, 10)) {
		oprationLength = Number.parseInt(elements, 10);
	}

	let oprationSize = (parseInt(size, 10) || 20) * -1;
	if (vertices.size && parseInt(vertices.size, 10)) {
		oprationSize = vertices.size;
		delete vertices['size'];
	}

	let time = cycle || 0.5;
	if ( vertices['animationDuration'] || vertices['-webkit-animation-duration'] || vertices['animation-duration']) {
		time = Number.parseFloat(vertices['animationDuration'] || vertices['-webkit-animation-duration'] || vertices['animation-duration']) || time;
		delete vertices['animationDuration'];
		delete vertices['-webkit-animation-duration'];
		delete vertices['animation-duration'];
	}

	let doms= null;
	const timeArray = getArr(time*-1,0,oprationLength+1);
	
	for (let index = 0; index < oprationLength; index++) {
		doms = (doms || '') + `<div class="${s.element}" style="
		-webkit-transform:rotate(${index * 360/oprationLength}deg) translate(0, ${fixpx(oprationSize)});
		transform:rotate(${index * 360/oprationLength}deg) translate(0, ${fixpx(oprationSize)});
		-webkit-animation-delay: ${timeArray[index]}s;
		animation-delay: ${timeArray[index]}s;
		-webkit-animation-duration: ${time}s;
		animation-duration: ${time}s;
		${inlineStyle(vertices) ? inlineStyle(vertices) : ''}
		${colorArray.length > 1 ? `background-color:${colorArray[index]}`: ''}
		"></div>
		`;
	}

	return (
		`
		<div class="${s.overlay}" style="position: ${parentIdDom ? 'absolute' : 'fixed'}; z-index:10000; ${inlineStyle(overlay) ? inlineStyle(overlay) : ''}">
			<div ${inlineStyle(content) ? `style="${inlineStyle(content)}"` : ''} class="${s.uildefaultcss} ${s.block}">
				${doms}
			</div>
		</div>
		`
	);
}