import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import styles from './page-profile.scss'

createCustomElement('page-profile', {
    renderer: { type: snabbdom },
    view,
    initialState: {},
    properties: {},
    styles
});