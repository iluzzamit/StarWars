import { StyledListHeader } from "./ListHeader.style";
import { Typography } from "@mui/material";


export function ListHeader({ title, actionComponent }: { title: string, actionComponent?: JSX.Element }) {
    return (
        <StyledListHeader square>
            <Typography variant="body2">
                {title}
            </Typography>
            {actionComponent}
        </StyledListHeader>
    )
}