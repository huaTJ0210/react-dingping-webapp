import React, { Component } from 'react'

import CollectionView from '@components/collection-view'
import { Swiper } from 'antd-mobile'

export default class Catagory extends Component {
  SwiperComponent() {
    return (
      <Swiper
        loop
        // autoplay
        indicatorProps={{
          style: {
            '--active-dot-color': 'red', // 当前元素圆点颜色
            '--dot-border-radius': '50%', // 元素圆点圆角值
            '--active-dot-border-radius': '5px', // 当前元素圆点的圆角值
            '--active-dot-size': '12px', // 元素圆点的大小
            '--dot-color': '#f5f5f5', // 元素圆点的颜色
            '--dot-size': '5px', // 元素圆点的大小
            '--dot-spacing': '5px', // 圆点与圆点之前的距离
          },
        }}
      >
        {this.props.catagoryList.length > 0 ? (
          this.props.catagoryList.map((item, index) => {
            return (
              <Swiper.Item key={index}>
                <CollectionView rowOfItems={5} dataList={item} />
              </Swiper.Item>
            )
          })
        ) : (
          <Swiper.Item />
        )}
      </Swiper>
    )
  }

  render() {
    return <div>{this.SwiperComponent()}</div>
  }
}
