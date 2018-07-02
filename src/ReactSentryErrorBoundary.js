import PropTypes from 'prop-types'
import Raven from '../../raven-js/src/singleton'
import React from 'react'

export default class ReactSentryErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    config: PropTypes.object,
    dsn: PropTypes.string.isRequired,
    errorCallback: PropTypes.func,
    errorNode: PropTypes.node,
    userContext: PropTypes.object
  }

  static defaultProps = {
    config: {}
  }

  constructor (props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error) {
    this.setState({
      hasError: true
    })

    this.logError(error)

    if (this.props.errorCallback) this.props.errorCallback()
  }

  logError (error) {
    const ravenClient = new Raven.Client()

    ravenClient.config(
      this.props.dsn,
      this.props.config
    )

    if (this.props.userContext) ravenClient.setUserContext(this.props.userContext)

    ravenClient.captureException(error)
  }

  render () {
    if (this.state.hasError && this.props.errorNode) return this.props.errorNode

    return this.props.children
  }
}
