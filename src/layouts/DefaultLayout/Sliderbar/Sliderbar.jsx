import React from 'react'
import styles from './Sliderbar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
const Sliderbar = () => {
  return (
    <aside className={cx('wrapper')}>
        <h2>Sliderbar</h2>
    </aside>
  )
}

export default Sliderbar