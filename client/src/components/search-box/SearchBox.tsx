import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { StyledSearchBox } from "./SearchBox.style";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import React from "react";

const DEFAULT_DEBOUNCE_TIME = 200
const DEFAULT_PAGE = 1

export function SearchBox() {
    const [value, setValue] = React.useState<string>();
    const [, setQuery] = useSearchParams();
    
    const setQueryCallback = React.useCallback(() => {
        setQuery((query) => {
            if (!value || value === '') {
                query.delete(EnumQueryParams.SEARCH);
            } else {
                query.set(EnumQueryParams.SEARCH, value);
            }
            query.set(EnumQueryParams.PAGE, DEFAULT_PAGE.toString())
            return query
        })
    }, [value])
    
    React.useEffect(() => {
        const timer = setTimeout(setQueryCallback, DEFAULT_DEBOUNCE_TIME);
        return () => {
            clearTimeout(timer);
        };
    }, [value, setQueryCallback]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <StyledSearchBox>
            <TextField
                label='Search'
                color="secondary"
                className='search-box'
                value={value}
                onChange={handleInputChange}
            />
        </StyledSearchBox>
    )
}