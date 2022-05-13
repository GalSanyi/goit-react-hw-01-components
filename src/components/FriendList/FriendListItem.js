import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={s.item}>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
