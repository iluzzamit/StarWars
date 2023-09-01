import { StyledLoading } from "./Loading.style";
import { LinearProgress } from "@mui/material";

export function Loading() {
    return (
        <StyledLoading>
            <LinearProgress />
        </StyledLoading>
    )
}