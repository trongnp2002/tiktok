import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from 'src/assets/images';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                  <img src={images.logo} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
