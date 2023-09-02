import { AppBar } from "@mui/material";
import styled from "styled-components";

export const StyledAppBar = styled(AppBar)`
    justify-content: center;
    display: flex;
    height: 5rem;

    .header-title {
        align-items: inherit;
        margin-left: 0.5rem;
        display: inherit;

        .header-title-logo {
            display: inherit;
            align-items: inherit;
            cursor: pointer;
            
            .header-title-text {
                margin-left: 0.5rem;
                margin-right: 1rem;
            }
        }

        .header-page-button {
            color: white;
        }
    }

    .logo {
        font-size: 2.5rem;
    }
`