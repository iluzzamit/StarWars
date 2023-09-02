import { Container } from "@mui/material";
import styled from "styled-components";

export const StyledPlanets = styled(Container)`
    height: calc(100% - 5rem);
    display: flex !important;
    flex-direction: column;
    padding: 1rem;

    .header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        justify-content: space-between;
    }
`