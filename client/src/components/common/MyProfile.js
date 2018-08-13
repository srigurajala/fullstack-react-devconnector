import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'

class MyProfile extends Component {
  render() {
    // see below
    const { userFetch, likesFetch } = this.props

  if (regressionFetch.pending) {
    return <Notification msg={}/>
  } else if (regressionFetch.fulfilled) {
    return <Notification msg={regressionFetch.value}/>
  }

  }
}

export default connect(props => ({
  regressionFetch: `/users/${props.userId}`
}))(MyProfile)