import React, { Component } from 'react'
import { Image } from 'antd-mobile'
import styles from './index.less'

export default class ShopItem extends Component {
  render() {
    const { img, title, distance, subTitle, price, number, oldPrice } =
      this.props
    return (
      <div className={styles.container}>
        <Image src={img} className={styles.contentLeft} />
        <div className={styles.contentRight}>
          <div className={styles.top}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.distance}>{distance}</span>
          </div>
          <p className={styles.middle}>{subTitle}</p>
          <div className={styles.bottom}>
            <div className={styles.price}>
              <span className={styles.newPrice}>￥{price}</span>
              <span className={styles.oldPrice}>
                {oldPrice && `￥${oldPrice}`}
              </span>
            </div>
            <span className={styles.number}>已售{number}</span>
          </div>
        </div>
      </div>
    )
  }
}
