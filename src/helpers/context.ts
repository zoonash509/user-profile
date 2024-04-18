import { IFilter } from "models/IFilter";
import { useState, createContext, SetStateAction } from "react";
import ReactDOM from "react-dom/client";

interface UserContextType {
    setSearchFilters: any
    searchFilters: IFilter;
}

export const UserContext = createContext<UserContextType>({
    setSearchFilters: null,
    searchFilters: {},
});
