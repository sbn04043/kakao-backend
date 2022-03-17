import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import {Paper, Tab, Tabs} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import Friends from "./pages/Friends";

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>("friends");

  const changeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };
  return (
    <section>
      <Box sx={{ pb: 7}}>{currentTab === "friends" && <Friends />}</Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={currentTab}>
          <Tab
            value="friends" 
            icon={<GroupIcon />}
            label="친구"
            onClick={() => changeTab("friends")}
          />
          <Tab
            value="chats"
            icon={<ChatIcon />}
            label="채팅"
            onClick={() => changeTab("chats")}
          />
        </Tabs>
      </Paper>
    </section>
  );
};

export default App;
