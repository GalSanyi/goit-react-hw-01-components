import defaultImage from './default.jpg';
import PropTypes from 'prop-types';
import s from './Profile.module.css';
import Stats from './Stats';

function Profile({
  avatar = defaultImage,
  username = 'not found',
  tag,
  location,
  stats,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats {...stats} />
    </div>
  );
}
Profile.prototype = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.string.isRequired,
};
export default Profile;
