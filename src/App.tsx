import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import GroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";

const App = (): JSX.Element => {
  const [tab, setTab] = useState<string>("friends");
  const changeTab = (changedValue: string) => {
    setTab(changedValue);
  };
  return (
    <section>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={tab}>
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
