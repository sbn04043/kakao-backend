import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Modal,
  TextField,
} from "@mui/material";

import Box from "@mui/material/Box";
import { friends } from "./data";
import ImageIcon from "@mui/icons-material/Image";
import React, { ChangeEvent, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FriendAdd from "./components/FriendAdd";

const Friends = (): JSX.Element => {
  const [findFriend, setFindFriend] = useState(friends);

  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const searchFriend = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText === "") {
      setFindFriend(friends);
    } else {
      const searching = friends.filter((friend) => {
        return friend.name.includes(event.currentTarget.value);
      });
      setFindFriend(searching);
    }
  };

  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <Box>
          <FriendAdd />
        </Box>
      </Modal>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="친구 검색"
              variant="outlined"
              margin="dense"
              onChange={searchFriend}
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
        {findFriend.map((friend) => {
          return (
            <ListItemButton key={friend.id}>
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
