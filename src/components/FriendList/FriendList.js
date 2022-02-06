import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({friends }) { 
    return <div>
        <ul className={s.friend_list}>
            {friends.map(friend =>
                <li key={friend.id } className={ s.item}>
                <span className={s.status}>{ friend.isOnline}</span>
                    <img classNname={s.avatar} src={ friend.avatar } alt="User avatar" width="48" />
                    <p className={s.name}>{ friend.name}</p>
</li>)}

</ul>
    </div>
}

FriendList.prototype = {
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}

export default FriendList;