import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__person">
          <Avatar src="" />
          <div className="chat__personInfo">
            <h3 className="chat__name">Group 1</h3>
            <p className="more__info">click here for more info</p>
          </div>
        </div>
        <div className="chat__header-icons">
          <IconButton>
            <SearchOutlined sx={{ color: "#AEBAC1" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon sx={{ color: "#AEBAC1" }} />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message-container">
        <span className="chat__name">Aadarsh</span>
        <div className="chat__message">
          <span className='chat__message-message'>This is a message</span>
          <span className="chat__time">{new Date().toLocaleTimeString().slice(0,5)}</span>
        </div>
        </p>
      </div>

      <div className="chat__input-container">
        adfasf
      </div>
    </div>
  );
};

export default Chat;
