import React from "react";
import Header from "./Header/Header";
import Statistics from "./statistics/Statistics";
import statistics from "./statistics/statistics-data.json";
import user from "./user.json";
import FriendList from './Friends/Friends'
import friend from './Friends/friends.json'

const Profile = () => (
  <>
    <Header user={user} />
    <Statistics statistics={statistics} />
    <FriendList friend={friend} />
  </>
);

export default Profile;
