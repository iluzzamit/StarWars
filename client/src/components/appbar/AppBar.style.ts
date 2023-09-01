import { AppBar } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
    justify-content: center;
    display: flex;
    height: 5rem;

    .title {
        margin-left: 0.5rem;
        flex-grow: 1;
    }

    .logo {
        font-size: 2.5rem;
    }
`