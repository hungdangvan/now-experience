import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div></div>
	);
};

createCustomElement('x-300949-ntt-p1-hello-world', {
	renderer: {type: snabbdom},
	view,
	styles
});
