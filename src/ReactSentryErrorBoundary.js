import PropTypes from 'prop-types'
import Raven from '../../raven-js/src/singleton'
import React from 'react'

export default class ReactSentryErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    config: PropTypes.object,
    dsn: PropTypes.string.isRequired,
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

    if (!this.ravenClient) {
      this.ravenClient = new Raven.Client()

      this.configureRaven(
        this.props.dsn,
        this.props.config,
        this.props.userContext
      )
    }

    this.logError(error)
  }

  componentWillReceiveProps (nextProps) {
    if (!this.ravenClient) return

    const isChangedConfig = JSON.stringify(this.nextProps.config) !== JSON.stringify(this.props.config)
    const isChangedDsn = this.nextProps.dsn !== this.props.dsn
    const isChangedUserContext = JSON.stringify(this.nextProps.userContext) !== JSON.stringify(this.props.userContext)

    if (!isChangedConfig && !isChangedDsn && !isChangedUserContext) return

    this.configureRaven(
      this.nextProps.dsn,
      this.nextProps.config,
      this.nextProps.userContext
    )
  }

  configureRaven (dsn, config, userContext) {
    this.ravenClient.config(
      dsn,
      config
    )

    if (userContext) this.ravenClient.setUserContext(userContext)
  }

  logError (error) {
    this.ravenClient.captureException(error)
  }

  render () {
    if (this.state.hasError && this.props.errorNode) return this.props.errorNode

    return this.props.children
  }
}
