import "./Sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SidebarChat from '../SidebarChat/SidebarChat'


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

      <div className="sidebar__chats">
        <SidebarChat img={'https://images.unsplash.com/photo-1662483763183-25b1b7868682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80'} name={'group chat 1'}  />
        <SidebarChat img={'https://images.unsplash.com/photo-1662469838214-a97415cd83fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} name={'group chat 2'}  />
        <SidebarChat img={'https://images.unsplash.com/photo-1662441898903-3fa6aa6838d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} name={'group chat 3'}  />
        <SidebarChat img={'https://images.unsplash.com/photo-1657214059175-53cb22261d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'} name={'group chat 4'}  />
      </div>
    </div>
  );
};

export default Sidebar;
