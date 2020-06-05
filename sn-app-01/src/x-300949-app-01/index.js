import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>Hello reactjs</div>
	);
};

createCustomElement('x-300949-app-01', {
	renderer: {type: snabbdom},
	view,
	styles
});
