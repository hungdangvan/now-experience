import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>hello Reactjs</div>
	);
};

createCustomElement('x-300949-ntt-tm-day-off-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
