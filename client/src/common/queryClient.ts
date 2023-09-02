import { QueryClient } from "@tanstack/react-query";
import axios from 'axios';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 600000,
            queryFn: async ({ queryKey: [url] }) => {
                const { data } = await axios.get(`http://localhost:3001/${(url as string).toLowerCase()}`)
                return data
            },
        },
    },
})