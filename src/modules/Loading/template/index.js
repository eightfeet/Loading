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

export default function (style, size, length, cycle, verticesColor) {
	const { overlay, content, vertices } = style || {};
	const oprationLength = parseInt(length || 12, 10);
	const oprationSize = parseInt(size || 20, 10) * -1;
	let time = cycle/2 || 0.5;
	let doms= null;
	const timeArray = getArr(time*-1,time,oprationLength);

	let colorArray = [];

	if (Array.isArray(verticesColor)) {
		colorArray = verticesColor;
		console.log(colorArray);
	}

	for (let index = 0; index < oprationLength; index++) {
		doms = (doms || '') + `<div class="${s.element}" style="
		-webkit-transform:rotate(${index * 360/oprationLength}deg) translate(0, ${fixpx(oprationSize)});
		transform:rotate(${index * 360/oprationLength}deg) translate(0, ${fixpx(oprationSize)});
		-webkit-animation-delay: ${timeArray[index]}s;
		animation-delay: ${timeArray[index]}s;
		-webkit-animation-duration: ${time*2+0.2}s;
		animation-duration: ${time*2+0.2}s;
		${inlineStyle(vertices)}
		${colorArray.length > 1 ? `background-color:${colorArray[index]}`: ''}
		"></div>
		`;
	}

	return (
		`
		<div class="${s.overlay}" style="z-index:10000; ${inlineStyle(overlay)}">
			<div style="${inlineStyle(content)}" class="${s.uildefaultcss} ${s.block}">
				${doms}
			</div>
		</div>
		`
	);
}