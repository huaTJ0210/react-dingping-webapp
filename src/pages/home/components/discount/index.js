import React, { Component } from 'react'
import styles from './index.less'
import { Image } from 'antd-mobile'
export default class Discount extends Component {
  render() {
    return (
      <div>
        <h3>超值特惠</h3>
        <div className={styles.container}>
          {this.props.discountList.map((ad) => {
            return <Image key={ad.img} src={ad.img} className={styles.image} />
          })}
        </div>
      </div>
    )
  }
}
