import React, { useState, useEffect } from 'react'
import { Form, Button } from 'antd'
import styles from './index.module.scss'

const SearchForm = (props) => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState() // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({})
    console.log('effect')
  }, [])

  const onFinish = (values) => {
    console.log('search:', values)
    props.searchValue(values)
  }

  console.log(props)
  return (
    <Form
      className={styles.form}
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      {props.searchItem}
      <Form.Item shouldUpdate>
        {() => (
          <Button type="primary" htmlType="submit">
            查 询
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}

export default SearchForm
