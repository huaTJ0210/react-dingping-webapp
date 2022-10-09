import React, { Component } from 'react'
import styles from './index.less'
import { Image } from 'antd-mobile'

import { getAdList } from '@services/cms'

export default class Discount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adList: [],
    }
  }
  componentDidMount() {
    getAdList().then((res) => {
      this.setState({
        adList: res,
      })
    })
  }

  render() {
    return (
      <div>
        <h3>超值特惠</h3>
        <div className={styles.container}>
          {this.state.adList.map((ad) => {
            return <Image key={ad.img} src={ad.img} className={styles.image} />
          })}
        </div>
      </div>
    )
  }
}
