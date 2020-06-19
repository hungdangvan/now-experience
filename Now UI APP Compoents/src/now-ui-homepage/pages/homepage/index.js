import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from './homepage.scss'

createCustomElement('ui-homepage', {
    renderer: { type: snabbdom },
    view,
    initialState: {
        items: []
    },
    properties: {
        filter: {
            default: 'default'
        }
    },
    styles
});