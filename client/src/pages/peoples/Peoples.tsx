import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { SearchBox } from "../../components/search-box/SearchBox";
import { SwapiResponse } from "../../common/types/SwapiResponse";
import { Loading } from "../../components/loading/Loading";
import { EnumPages } from "../../common/enums/EnumPages";
import { useSearchParams } from "react-router-dom";
import { People } from "../../common/types/People";
import { useQuery } from "@tanstack/react-query";
import { StyledPeoples } from "./Peoples.style";
import { Typography } from "@mui/material";
import { useDebounce } from "use-debounce";
import React from "react";

const columns: GridColDef<People>[] = [
    { field: 'name', headerName: 'Name', minWidth: 300 },
    { field: 'height', headerName: 'Height', minWidth: 300 },
    { field: 'mass', headerName: 'Mass', minWidth: 300 },
    { field: 'gender', headerName: 'Gender', minWidth: 300 },
    { field: 'birth_year', headerName: 'Birthday', minWidth: 300, flex: 1 },
];

export function Peoples() {
    const apiRef = useGridApiRef();
    const [query, setQuery] = useSearchParams();

    // query params
    const page = query.get(EnumQueryParams.PAGE);
    const parsedPage = page ? parseInt(page) : 1;
    const search = query.get(EnumQueryParams.SEARCH);

    // query suffix
    let queryKey = `${EnumPages.PEOPLE}?page=${parsedPage}`;
    if (search) queryKey += `&search=${search}`;

    // request
    const [debouncedQueryKey] = useDebounce(queryKey, 300);
    const { data, isLoading } = useQuery<SwapiResponse<People>>({ queryKey: [debouncedQueryKey] })
    const { results, count } = data || { results: [], count: 0 };

    React.useEffect(() =>{
        apiRef.current.setPage(parsedPage - 1);
    }, [parsedPage])

    return (
        <StyledPeoples maxWidth={false}>
            <div className='header'>
                <Typography>Peoples</Typography>
                <SearchBox autoCompleteResourcePrefix={EnumPages.PEOPLE} />
            </div>
            <DataGrid
                rows={results}
                apiRef={apiRef}
                rowCount={count}
                className="grid"
                columns={columns}
                loading={isLoading}
                disableRowSelectionOnClick
                getRowId={(people: People) => people.name}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10, page: parsedPage - 1 }
                    },
                }}

                slots={{
                    loadingOverlay: Loading
                }}

                pagination
                paginationMode='server'
                pageSizeOptions={[10]}
                onPaginationModelChange={(pagModel) => setQuery(query => {
                    query.set(EnumQueryParams.PAGE, (pagModel.page + 1).toString())
                    return query;
                })}
            />
        </StyledPeoples>
    )
}