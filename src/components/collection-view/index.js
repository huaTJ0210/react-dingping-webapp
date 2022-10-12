import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.less'

class CollectionView extends Component {
  render() {
    const dataList = this.props.dataList
    const rowOfItems = this.props.rowOfItems //  一行有几个：rowOfItems
    const width = 100 / rowOfItems
    return (
      <ul className={style.container}>
        {dataList.length > 0 &&
          dataList.map((item) => {
            return (
              <li
                key={item.id}
                style={{ width: `${width}%` }}
                onClick={() => {
                  this.props.history.push('/search')
                }}
              >
                <img src={item.img} />
                <h3>{item.title}</h3>
              </li>
            )
          })}
      </ul>
    )
  }
}

export default withRouter(CollectionView)
