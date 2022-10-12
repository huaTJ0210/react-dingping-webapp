import React, { Component } from 'react'
import { SearchOutline } from 'antd-mobile-icons'
import styles from './index.less'
import PropsTypes from 'prop-types'

export default class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
  }

  onChangeHandler(e) {
    this.setState({
      value: e.target.value,
    })
  }
  onKeyUpHandler(e) {
    // 监听回车键
    if (e.keyCode === 13) {
      this.props.searchInputHandler(this.state.value)
    }
  }
  render() {
    return (
      <div className={styles.searchInput} style={this.props.style}>
        <SearchOutline />
        <input
          value={this.state.value || ''}
          placeholder="请输入关键字"
          onChange={this.onChangeHandler}
          onKeyUp={this.onKeyUpHandler}
          maxLength={10}
        />
      </div>
    )
  }
}

// eslint-disable-next-line react/static-property-placement
SearchInput.propTypes = {
  searchInputHandler: PropsTypes.func.isRequired,
}
