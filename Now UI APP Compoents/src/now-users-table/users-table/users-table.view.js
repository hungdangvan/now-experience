import '@servicenow/now-icon'
import '@servicenow/now-avatar'
import '@servicenow/now-toggle'

export default (state, { }) => {
  const {
    properties: {
      headers,
      showFilters
    },
    showingItems
  } = state

  return (
    <div className="users-table-container">
      <table>
        <thead>
          <tr>
            {headers.map(n => (
              <th>{n.label}</th>
            ))}
          </tr>
          {showFilters ? (
            <tr>
              {headers.map(n => (
                <th><input type="text" placeholder={'Search ' + n.label} /></th>
              ))}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {showingItems.map(n => (
            <tr>
              {headers.map(h => (
                <td>{n[h.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="headers-group">
        {headers.map(n => (
          <div className="header-chosen">
            <label>{n.label}</label>
            <input type="checkbox" checked placeholder={'Search ' + n.label} />
            <now-toggle size="md" checked={true}></now-toggle>
          </div>
        ))}
      </div>
    </div>
  )
}