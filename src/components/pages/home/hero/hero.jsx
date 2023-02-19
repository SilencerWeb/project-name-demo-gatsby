import classNames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

import styles from './hero.module.scss';
import illustration from './images/illustration.svg';
import MoonIcon from './images/moon.inline.svg';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('wrapper')}>
    <div className={cx('inner', 'container')}>
      <h1 className={cx('title')}>Hero section</h1>
      <p className={cx('description')}>Some</p>
      <Link className={cx('button')} to="/about">
        <MoonIcon />
        <img src={illustration} alt="Elephant" />
        Click me!
      </Link>
      <StaticImage src="./images/hero-illustration.jpg" alt="Elephant" />
    </div>
  </section>
);

export default Hero;
