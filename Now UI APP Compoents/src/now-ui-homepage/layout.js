import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import defaultLayout from './defaultLayout'
import styles from './layout.scss'

createCustomElement('ui-layout', {
    renderer: { type: snabbdom },
    view: defaultLayout,
    initialState: {
        title: "NOW UI"
    },
    properties: {},
    styles
});