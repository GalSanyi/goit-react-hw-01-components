
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statictics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from './TransactionHistory/TransactionHistory'
//!импорт разметки
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions'
function App() { 
  return <div>
    <Profile 
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
      />
     
      <Statistics stats={data} />
       
      <FriendList friends={ friends } />
  <TransactionHistory  items={transactions}/>
</div>
}

export default App;