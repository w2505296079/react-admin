import React from 'react'
import styles from './index.module.scss'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div className={styles.content}>Home</div>
  }
}

export default withRouter(Home)
