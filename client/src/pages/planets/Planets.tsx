import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { SearchBox } from "../../components/search-box/SearchBox";
import { SwapiResponse } from "../../common/types/SwapiResponse";
import { Loading } from "../../components/loading/Loading";
import { EnumPages } from "../../common/enums/EnumPages";
import { useSearchParams } from "react-router-dom";
import { Planet } from "../../common/types/Planet";
import { useQuery } from "@tanstack/react-query";
import { StyledPlanets } from "./Planets.style";
import { Typography } from "@mui/material";
import { useDebounce } from "use-debounce";
import React from "react";

const columns: GridColDef<Planet>[] = [
    { field: 'name', headerName: 'Name', minWidth: 300 },
    { field: 'diameter', headerName: 'Height', minWidth: 300 },
    { field: 'climate', headerName: 'Mass', minWidth: 300, flex: 1 },
];

export function Planets() {
    const apiRef = useGridApiRef();
    const [query, setQuery] = useSearchParams();

    // query params
    const page = query.get(EnumQueryParams.PAGE);
    const parsedPage = page ? parseInt(page) : 1;
    const search = query.get(EnumQueryParams.SEARCH);

    // query suffix
    let queryKey = `${EnumPages.PLANET}?page=${parsedPage}`;
    if (search) queryKey += `&search=${search}`;

    // request
    const [debouncedQueryKey] = useDebounce(queryKey, 300);
    const { data, isLoading } = useQuery<SwapiResponse<Planet>>({ queryKey: [debouncedQueryKey] })
    const { results, count } = data || { results: [], count: 0 };

    React.useEffect(() => {
        apiRef.current.setPage(parsedPage - 1);
    }, [parsedPage])

    return (
        <StyledPlanets maxWidth={false}>
            <div className='header'>
                <Typography>Planets</Typography>
                <SearchBox autoCompleteResourcePrefix={EnumPages.PLANET} />
            </div>
            <DataGrid
                rows={results}
                apiRef={apiRef}
                rowCount={count}
                className="grid"
                columns={columns}
                loading={isLoading}
                disableRowSelectionOnClick
                getRowId={(planet: Planet) => planet.name}
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
        </StyledPlanets>
    )
}