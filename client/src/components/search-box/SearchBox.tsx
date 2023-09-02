import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { useSearchParams } from "react-router-dom";
import { TextField } from "@mui/material";
import React from "react";

export function SearchBox() {
    const [query, setQuery] = useSearchParams();
    const search = query.get(EnumQueryParams.SEARCH) || '';

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(query => {
            const value = event.target.value;

            if(value) {
                query.set(EnumQueryParams.SEARCH, value);
            } else {
                query.delete(EnumQueryParams.SEARCH);
            }
            query.set(EnumQueryParams.PAGE, '1');
            return query;
        })
    };

    return (
        <div>
            <TextField
                label='Search'
                value={search}
                onChange={onChange}
            />
        </div>
    )
}