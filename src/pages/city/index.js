import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userInfoActionCreators } from '@store/userinfo'
import styles from './index.less'

import NavgationBar from '@components/nav-bar'
import CurrentCity from './components/current-city'
import CityList from './components/city-list'

class City extends Component {
  // #region 业务实例方法
  changeCity(cityName) {
    this.props.updateCity(cityName)
  }
  // #endregion

  render() {
    const { cityName } = this.props.userInfo
    return (
      <div className={styles.container}>
        <NavgationBar>选择城市</NavgationBar>
        <CurrentCity title={cityName} />
        <CityList
          changeCity={(cityName) => {
            this.changeCity(cityName)
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})
const mapDispatchToProps = (dispatch) => bindActionCreators(userInfoActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(City)
