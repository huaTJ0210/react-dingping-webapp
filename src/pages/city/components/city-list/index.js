import React, { Component } from 'react'
import styles from './index.less'

const cityList = ['北京', '上海', '杭州', '广州', '苏州', '深圳']
export default class CityList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h3>热门城市</h3>
        <div className={styles.cityList}>
          {cityList.map((item, index) => {
            return (
              <span
                onClick={() => {
                  this.props.changeCity(item)
                }}
                className={styles.item}
                key={index}
              >
                {item}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}
