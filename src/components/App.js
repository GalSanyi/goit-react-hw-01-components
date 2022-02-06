
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statictics";
import FriendList from "./FriendList/FriendList";
import Container from "./Container/Containert";
//!импорт разметки
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends'
function App() { 
    return <Container>
     
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
  </Container>
  

}

export default App;