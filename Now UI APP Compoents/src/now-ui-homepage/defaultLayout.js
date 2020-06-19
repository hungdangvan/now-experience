import './components/ui-header'
import Home from './pages/homepage'
import ProfilePage from './pages/page-profile'
import { Switch, Route } from 'react-router-dom'

export default (state, { }) => {
  return (
    <div className="main-container">
      <ui-header></ui-header>
      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={ProfilePage} />
        </Switch>
      </div>
    </div>
  )
}