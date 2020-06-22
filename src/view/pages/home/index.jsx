<<<<<<< HEAD
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { withRouter } from 'react-router-dom'
import Search from '@/component/search'
import { Form, Input } from 'antd'
import { test } from '@/util/api'

const Home = (props) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await test()
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  })
  const getValue = (e) => {
    console.log(e)
  }

  const searchItem = (
    <>
      <Form.Item name="username">
        <Input placeholder="姓名" />
      </Form.Item>
      <Form.Item name="password">
        <Input placeholder="编号" />
      </Form.Item>
    </>
  )

  return (
    <div className={styles.content}>
      <Search
        searchItem={searchItem}
        searchValue={(e) => {
          getValue(e)
        }}
      />
    </div>
  )
=======
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
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
}

export default withRouter(Home)
