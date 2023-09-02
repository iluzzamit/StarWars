import { Button, Toolbar, Typography } from "@mui/material";
import { EnumPages } from "../../common/enums/EnumPages";
import { LogoSvg } from "../../common/assets/LogoSvg";
import { useNavigate } from "react-router-dom";
import { StyledAppBar } from "./AppBar.style";

const pages = [
  { name: 'Peoples', prefix: `/${EnumPages.PEOPLE}` },
  { name: 'Planets', prefix: `/${EnumPages.PLANET}` }
]

export function AppBar() {
  const navigate = useNavigate();
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <div className='header-title'>
          <div className='header-title-logo' onClick={() => navigate('')}>
            <LogoSvg />
            <Typography className='header-title-text' variant="h5">StarWars</Typography>
          </div>
          {pages.map((page) => (
            <Button className='header-page-button' onClick={() => navigate(page.prefix)} key={page.name}>
              {page.name}
            </Button>
          ))}
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}
