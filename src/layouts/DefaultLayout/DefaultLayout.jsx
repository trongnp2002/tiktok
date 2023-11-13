import React from 'react'
import classNames from 'classnames/bind'
import Sliderbar from './Sliderbar'
import Header from './Header'
import styles from './DefaultLayout.module.scss'
const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
  return (
    <div className={cx('wrapper')}>
        <Header></Header>
        <div className={cx('container')}>
            <Sliderbar></Sliderbar>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout