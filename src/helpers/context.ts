import { IFilter } from "models/IFilter";
import {  createContext } from "react";

interface UserContextType {
    setSearchFilters: any
    searchFilters: IFilter;
}

export const UserContext = createContext<UserContextType>({
    setSearchFilters: null,
    searchFilters: {},
});
