import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useState } from "react";
import axios from "../../axios";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,   
      name: "none",
      timestamp: "just now",
      received: true,
    });

    setInput("");
  };

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
        {messages.map((message) => (
          <p
            className={`chat__message-container ${
              message.received && "chat__receiver"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            <div className="chat__message">
              <span className="chat__message-message">{message.message}</span>
              <span className="chat__time">{message.timestamp}</span>
            </div>
          </p>
        ))}
      </div>

      <div className="chat__input-container">
        <IconButton>
          <InsertEmoticonIcon sx={{ color: "#AEBAC1" }} />
        </IconButton>
        <IconButton>
          <AttachFileIcon
            sx={{ color: "#AEBAC1", transform: "rotate(45deg)" }}
          />
        </IconButton>
        <form>
          <input
            value={input}
            type="text"
            placeholder="Type a message"
            className="message__input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            send message
          </button>
        </form>

        <IconButton>
          <KeyboardVoiceIcon sx={{ color: "#AEBAC1" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
