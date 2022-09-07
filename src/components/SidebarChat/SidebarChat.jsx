import "./SidebarChat.css";
import { Avatar } from "@mui/material";

const SidebarChat = ({img, name}) => {
  return (
    <div className="sidebarChat">
      <Avatar src={img} sx={{cursor: 'pointer'}}/>

      <div className="sidebarChat__info">
        <h2 className="group__name">{name}</h2>
        <p className="lastMessage">This is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
