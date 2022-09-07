import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://images.unsplash.com/photo-1552168212-9ceb61083ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80" />
        <div className="sidebar__header-right">
          <IconButton>
            <DonutLargeIcon sx={{ color: "#AEBAC1" }} />
          </IconButton>
          <IconButton>
            <ChatIcon sx={{ color: "#AEBAC1" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon sx={{ color: "#AEBAC1" }} />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search-container">
        <div className="sidebar__search">
          <SearchOutlined sx={{ color: "#AEBAC1" }} />
          <input type="text" placeholder="Search or start new chat" />
        </div>

        <IconButton>
          <FilterListIcon sx={{ color: "#AEBAC1" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
