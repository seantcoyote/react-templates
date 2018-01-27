import React from 'react'
import {object} from 'prop-types'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
// import * as uiActions from '../../actions/uiActions'
import defaultStyles from './styles'

class NewContainer extends React.Component {
  componentWillMount () {
    const {styles} = this.props
    console.log('styles:', styles)
  }

  render () {
    const {styles} = this.props

    return (
      <div style={{...defaultStyles.base, ...styles}}>
        <p>NewContainer</p>
      </div>
    )
  }
}

NewContainer.propTypes = {
  styles: object
}

// const mapStateToProps = (state) => ({
//   appInfo: state.appInfo
// })
//
//
// const mapDispatchToProps = (dispatch) => ({
//   uiActions: bindActionCreators(uiActions, dispatch)
// })
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewContainer))

export default NewContainer
