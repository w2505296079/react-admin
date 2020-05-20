import React from 'react'
import styles from './index.module.scss'

import { withRouter } from 'react-router-dom'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log(this.props)
  }
  toHome() {
    console.log('ss')
    this.props.history.replace('/')
  }

  render() {
    return (
      <div className={styles.content} onClick={() => this.toHome()}>
        About
      </div>
    )
  }
}

export default withRouter(About)
