import s from './Loading.scss';
import { inlineStyle, fixpx } from '~/utils/tools';

export default function (style, size, length) {
	const { overlay, content, vertices } = style || {};
	const oprationLength = parseInt(length || 12, 10);
	const oprationSize = parseInt(size || 20, 10) * -1;
	console.log('oprationSize', oprationSize);
	let doms= null;

	for (let index = 0; index < oprationLength; index++) {
		doms = (doms || '') + `<div class="${s.element}" style="
		-webkit-transform:rotate(${index * 360/oprationLength}deg) translate(0, ${fixpx(oprationSize)});
		transform:rotate(${index * 360/oprationLength}deg) translate(0, ${fixpx(oprationSize)});
		${inlineStyle(vertices)}"></div>
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