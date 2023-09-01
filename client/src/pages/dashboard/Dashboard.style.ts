import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledDashboard = styled(Container)`
    height: 100%;
    display: flex !important;
    
    .MuiCard-root {
        box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    }
`

export const StyledDashboardSideContainer = styled.div`
    height: calc(100% - 5rem);
    flex-direction: column;
    display: flex;
    margin: 1rem;
    width: 100%;

        
    .list-container {
        margin-top: 1rem !important;
        padding-bottom: 2rem;
        overflow-y: auto;
    }
`