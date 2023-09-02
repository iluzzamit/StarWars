import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { SwapiResponse } from "../../common/types/SwapiResponse";
import { Autocomplete, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import React from "react";

export function SearchBox({ autoCompleteResourcePrefix }: { autoCompleteResourcePrefix: string }) {
    const [query, setQuery] = useSearchParams();
    const search = query.get(EnumQueryParams.SEARCH);
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        setValue(search || '');
    }, [search])

    const queryKey =  value ? `${autoCompleteResourcePrefix}?search=${value}` : autoCompleteResourcePrefix;
    const [debouncedQueryKey] = useDebounce(queryKey, 300);
    const { data, isLoading } = useQuery<SwapiResponse<{ name: string }>>({ queryKey: [debouncedQueryKey] })
    const { results } = data || { results: [] };
    
    const onSubmit = (_: unknown, value: string | null) => {
        setQuery(query => {
            if (value) {
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
            <Autocomplete
                options={results.map(result => result.name)}
                sx={{ width: 300 }}
                onChange={onSubmit}
                loading={isLoading}
                value={search}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        value={value}
                        label='Search'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setValue(event.target.value)
                        }}
                    />
                )}
            />
        </div>
    )
}