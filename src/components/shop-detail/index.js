import React, { Component } from 'react'
import styles from './index.less'

import { Image, Rate } from 'antd-mobile'

export default class ShopDetail extends Component {
  renderShopDetail(detail) {
    const { img, title, star, price, subTitle, time, phone } = detail
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Image src={img} className={styles.image} />
          <div className={styles.detail}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.middle}>
              <Rate
                readOnly
                allowHalf
                value={star}
                style={{ '--active-color': 'var(--red-color)' }}
              />
              <span>{price}</span>
            </div>
            <span className={styles.subTitle}>{subTitle}</span>
          </div>
        </div>
        <p>{time}</p>
        <p>{phone}</p>
      </div>
    )
  }

  render() {
    return this.props.detail ? this.renderShopDetail(this.props.detail) : null
  }
}
