import React from "react";
import s from "./friends.module.css";

const FriendList = ({friends}) => (
  <li className={s.item}>
  <span className={s.status}></span>
  <img className={s.avatar} src="" alt="" width="48" />
  <p className={s.name}></p>
</li>
)




export default FriendList
