import { Toolbar, Typography } from "@mui/material";
import { SearchBox } from "../search-box/SearchBox";
import { StyledAppBar } from "./AppBar.style";

export function AppBar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography className='title' variant="h6" component="div">
          StarWars
        </Typography>
        <SearchBox />
      </Toolbar>
    </StyledAppBar>
  );
}
