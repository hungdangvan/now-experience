import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from './ui-header.scss'

createCustomElement('ui-header', {
    renderer: { type: snabbdom },
    view,
    initialState: {},
    properties: {},
    styles
});