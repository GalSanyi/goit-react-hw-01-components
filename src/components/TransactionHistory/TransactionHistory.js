import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) { 
    return <div>
        <table className={s.history}>
              <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item =>
                      <tr>
      <td>{item.type }</td>
      <td>{ item.amount}</td>
      <td>{ item.currency}</td>
    </tr>
                    )}    
  
   
  </tbody>
         
</table>
    </div>
}

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.number.isRequired,
}
 
export default TransactionHistory;

