import React from 'react'
import List from './List.json'
import Friend from './Friend'


const FriendList = () => {
    const mappedFriends = List.data.map(((friend, i) => <Friend key = {i + friend.name}
                                                         name = {friend.name}
                                                         age = {friend.age}
                                                         pet = {friend.pets}
                                                         />))
                                                         

return (
    <div className = 'container'>
        {mappedFriends}
    
    </div>
)                                                           
}


export default FriendList