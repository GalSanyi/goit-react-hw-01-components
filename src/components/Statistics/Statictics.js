import s from './Statistics.module.css';
import PropTypes from 'prop-types';
console.log(s);

function Statistics({ stats}) { 
    return <div>
        
    <section className={ s.statistics}>
        <h2 className={ s.title}>Upload stats</h2>

        <ul className={ s.list}>
            {stats.map(stat =>
                <li key={stat.id } className={ s.item}>
        
                <span className={ s.label}>{ stat.label}</span>
                <span className={s.percentage}>{ stat.percentage}%</span>
              
                    </li>
                   
                )}

   
  </ul>
</section>
 </div>
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default Statistics;