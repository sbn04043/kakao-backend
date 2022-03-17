import {
    Avatar,
    Container,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import { friends } from "./data";
import ImageIcon from "@mui/icons-material/Image";
import { ChangeEvent, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Friends = (): JSX.Element => {
    const [findFriend, setFindFriend] = useState(friends);

    const searchFriend = (event: ChangeEvent<HTMLInputElement>) => {
        const inputText = event.currentTarget.value;
        if (inputText === "") {
            setFindFriend(friends);
        } else {
        const searching = friends.filter((friend) => {
            return friend.name.includes(event.currentTarget.value);
            })
        setFindFriend(searching);
        }
    };

    return (
        <Container>
            <Box>
                <Grid container>
                    <Grid item xs={11}>
            <TextField 
                fullWidth 
                id="outlined-basic" 
                label="친구 검색" 
                variant="outlined" 
                margin="dense" 
                onChange={searchFriend} 
                />
                </Grid>
                <Grid item>
                    <Button><PersonAddIcon /></Button>
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
                            <ListItemText primary={friend.name} secondary={friend.statusMessage} />
                        </ListItemButton>
                    )
                })}
            </List>
        </Container>
    )
}

export default Friends;