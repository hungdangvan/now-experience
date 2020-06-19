import '@servicenow/now-icon'
import '@servicenow/now-avatar'

export default (state, { }) => {
  return (
    <div className="ui-header">
      <div className="brand">NTT DATA</div>
      <div className="main-actions">
        <div className="notifications">
          <now-icon icon="bell-outline" size="lg" />
        </div>
        <div className="user-actions">
          <now-avatar userName="ADMIN - Chung Pham Thanh" imageSrc="" size="sm" presence="available" ariaHidden="true"></now-avatar>
        </div>
      </div>
    </div>
  )
}