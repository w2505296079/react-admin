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
}

export default withRouter(Home)
