import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './../home/Home'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import RecipeIndex from '../recipe/RecipeIndex'
import RecipeCreate from '../recipe/RecipeCreate'
import RecipeShow from '../recipe/RecipeShow'
import RecipeUpdate from '../recipe/RecipeUpdate'
import Search from '../recipePuppy/Search'
import Kids from '../recipePuppy/Kids'
import American from '../recipePuppy/American'
import British from '../recipePuppy/British'
import French from '../recipePuppy/French'
import Italian from '../recipePuppy/Italian'
import Mexican from '../recipePuppy/Mexican'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' component={Home}/>
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} exact path='/recipes' render={() => (
            <RecipeIndex msgAlert={this.msgAlert} user={user} />
          )} />

          <AuthenticatedRoute user={user} exact path='/recipe/:recipeId' render={({ match }) => (
            <RecipeShow msgAlert={this.msgAlert} user={user} match={match}/>
          )} />

          <AuthenticatedRoute user={user} exact path='/recipe-create' render={({ match }) => (
            <RecipeCreate msgAlert={this.msgAlert} match={match} user={user} />
          )} />

          <AuthenticatedRoute user={user} exact path='/recipe-update/:recipeId' render={({ match, history }) => (
            <RecipeUpdate match={match} history={history} user={user} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/search' render={({ match, history }) => (
            <Search match={match} history={history} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/kids' render={({ match, history }) => (
            <Kids match={match} history={history} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/american' render={({ match, history }) => (
            <American match={match} history={history} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/british' render={({ match, history }) => (
            <British match={match} history={history} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/french' render={({ match, history }) => (
            <French match={match} history={history} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/italian' render={({ match, history }) => (
            <Italian match={match} history={history} msgAlert={this.msgAlert} />
          )} />

          <AuthenticatedRoute user={user} exact path='/mexican' render={({ match, history }) => (
            <Mexican match={match} history={history} msgAlert={this.msgAlert} />
          )} />

        </main>
      </Fragment>
    )
  }
}

export default App
