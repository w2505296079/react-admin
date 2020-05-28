import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

const About = (props) => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    document.title = num + 'times'
  })

  useEffect(() => {
    console.log('num', num)
  })
  return (
    <div className={styles.about}>
      <div>{num}</div>
      <Button onClick={() => setNum(num + 1)}>增加</Button>
      <Button onClick={() => setNum(num - 1)}>减少</Button>
    </div>
  )
}

export default withRouter(About)
