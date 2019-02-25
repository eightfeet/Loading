import './style/common';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Loading from 'modules/Loading';

module.exports = Loading;
