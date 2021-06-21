import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// class PrivateRoute extends Component {
//   render () {
//     const { token } = this.props.auth
//     return (
//       <Route {this.props} render={(props) => {
//         if (token !== null) {
//           return (
//             this.props.children
//           )
//         } else {
//           return (<Redirect to="/Login"/>)
//         }
//       }}
//       />
//     )
//   }
// }

const PrivateRoute = ({ children, auth, ...rest }) => {
  const { token } = auth
  return (
    <Route {...rest} render = {(props) => {
      if (token !== null) {
        return (children)
      } else {
        return (<Redirect to="/Login"/>)
      }
    }} />
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
