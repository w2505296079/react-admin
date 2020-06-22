<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'
import { add, minus, asyncAdd } from '@/util/store/actions/counter'

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    },
  }),
)
class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <div className={styles.content}>{this.props.counter.num}</div>
        <Button onClick={this.props.add}>增加</Button>
        <Button onClick={this.props.dec}>减少</Button>
        <Button onClick={this.props.asyncAdd}>延迟</Button>
=======
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
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
      </div>
    )
  }
}

export default withRouter(About)
