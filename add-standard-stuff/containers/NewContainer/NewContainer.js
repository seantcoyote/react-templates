import React, {Component} from 'react'
import {object} from 'prop-types'
import {bindActionCreators, compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as uiActions from '../../actions/uiActions'
import NewComponent from '../../components/NewComponent'
import defaultStyles from './styles'

class NewContainer extends Component {
  componentWillMount () {
    console.log('NewContainer props:', this.props)
  }

  render () {
    const {styles} = this.props

    return (
      <NewComponent styles={styles} />
    )
  }
}

NewContainer.propTypes = {
  styles: object
}

const mapStateToProps = (state) => ({
  appInfo: state.appInfo
})

const mapDispatchToProps = (dispatch) => ({
  uiActions: bindActionCreators(uiActions, dispatch)
})

const wrap = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default wrap(NewContainer)
