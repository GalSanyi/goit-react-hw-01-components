import s from './Statistics.module.css';
import PropTypes from 'prop-types';
console.log(s);

function Statistics({ stats, title }) {
  return (
    <div>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.list}>
          {stats.map(({ label, percentage, id }) => (
            <li key={id} className={s.item}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
export default Statistics;
