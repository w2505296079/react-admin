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
      </div>
    )
  }
}

export default withRouter(About)
