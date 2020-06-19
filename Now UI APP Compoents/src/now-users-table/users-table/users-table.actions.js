import { actionTypes } from '@servicenow/ui-core';
import { createHttpEffect } from '@servicenow/ui-effect-http';
import data from './data.json'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'

const fetchUsers = createHttpEffect('/api/now/table/sys_user?sysparm_limit=10', {
  method: 'GET',
  successActionType: FETCH_USERS_SUCCEEDED
});

export default {
  actionHandlers: {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({ dispatch }) => {
      // dispatch(FETCH_USERS);
      dispatch(FETCH_USERS_SUCCEEDED);

    },
    // [FETCH_USERS]: fetchUsers,
    [FETCH_USERS_SUCCEEDED]: {
      stopPropagation: true,
      effect: ({ action, updateState, updateProperties }) => {
        // const { payload: { result } } = action

        // console.log(result)
        // updateState({
        //   items: result
        // })
        updateState({
          items: data
        })

        const headers = []

        Object.keys(data[0]).forEach(n => headers.push({ field: n, label: n }))

        updateProperties({
          headers
        })
      },
    }
  }
}