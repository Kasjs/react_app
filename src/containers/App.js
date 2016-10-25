import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'

class App extends Component {
  render() {
    const { name } = this.props.user 
    const { year, photos } = this.props.page 
    return <div>
      <User name={user.name} />
      <Page photos={page.photos} year={page.year} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.user, 
    page: state.page 
  }
}

export default connect(mapStateToProps)(App)