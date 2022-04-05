import {
  Avatar,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import axios from "axios";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import { AssignmentLateRounded } from "@mui/icons-material";

type SearchResultType = {
  id: number;
  name: string;
  statusMessage: string;
};

type FriendAddType = {
  callback: () => void;
};

const FriendAdd = (props: FriendAddType): JSX.Element => {
  const { callback } = props;
  const [phone, setPhone] = useState<string>();
  const [searchFriend, setSearchFriend] = useState<SearchResultType>();
  const [friend, setFriend] = useState<SearchResultType>();

  const updateSearchNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  };

  const search = async () => {
    const { data } = await axios.get<SearchResultType>(
      "http://localhost:5000/friend/search",
      {
        params: {
          phone,
        },
      }
    );
    setSearchFriend(data);
  };

  const addUser = async () => {
    try {
      await axios.post("http://localhost:5000/friend", {
        userId: 1,
        phone,
      });
      await callback();
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        const { data } = e.response;
        if (data) {
          AssignmentLateRounded(data.message);
        }
      }
    }
  };

  return (
    <Container sx={{ p: 5 }}>
      <Box sx={{ backgroundColor: "#f3f3f3", p: 3, borderRadius: "10px" }}>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              fullWidth
              label="전화번호"
              value={phone}
              onChange={updateSearchNumber}
            />
          </Grid>
          <Grid item xs={1.5}>
            <IconButton sx={{ p: 2 }} onClick={search}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
        {searchFriend && (
          <List>
            <ListItem
              secondaryAction={
                <IconButton onClick={addUser}>
                  <PersonAddIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={searchFriend.name}
                secondary={searchFriend.statusMessage}
              />
            </ListItem>
          </List>
        )}
      </Box>
    </Container>
  );
};

export default FriendAdd;
