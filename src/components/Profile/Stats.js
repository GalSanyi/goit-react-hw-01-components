import React from 'react';
import s from './Profile.module.css';
export default function Stats({ followers, views, likes }) {
  return (
    <ul className={s.stats}>
      <li className={s.box}>
        <span className={s.lable}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.box}>
        <span className={s.lable}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.box}>
        <span className={s.lable}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
}
