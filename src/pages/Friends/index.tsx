import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";

import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";
import React, { ChangeEvent, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FriendAdd from "./components/FriendAdd";
import axios from "axios";

type FriendType = {
  id: number;
  name: string;
  statusMessage: string;
};

const Friends = (): JSX.Element => {
  const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
  const [friendList, setFriendList] = useState<FriendType[]>([]);

  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length === 0) {
      setFriendList(originalFriends);
    } else {
      const filteredFriends = originalFriends.filter((friend) => {
        return friend.name.includes(inputText);
      });
      setFriendList(filteredFriends);
    }
  };

  const getFriendList = async () => {
    const { data } = await axios.get<FriendType[]>(
      "http://localhost:5000/friend/1"
    );
    setOriginalFriends(data);
    setFriendList(data);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  const finishAddFriend = async () => {
    await getFriendList();
    closeModal();
  };

  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <Box>
          <FriendAdd callback={finishAddFriend} />
        </Box>
      </Modal>
      <Menu
        id="basic-menu"
        anchorEl={anchor}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>채팅하기</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="친구 검색"
              variant="outlined"
              margin="dense"
              onChange={changeSearchText}
            />
          </Grid>
          <Grid item xs={1.5}>
            <Box sx={{ p: "8px" }}>
              <IconButton color="primary" size="large" onClick={openModal}>
                <PersonAddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <List>
        {friendList.map((friend) => {
          return (
            <ListItemButton key={friend.id} onClick={handleClick}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={friend.name}
                secondary={friend.statusMessage}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export default Friends;
