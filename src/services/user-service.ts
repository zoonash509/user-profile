import { useMutation, useQuery, useQueryClient } from "react-query";
import { IUser } from "models/IUser";
import axios from "axios";
import { QueryKeys } from "helpers/query-keys";

export const SetupAPI = axios.create({
    baseURL: 'https://randomuser.me',
    withCredentials: false,
    headers: {
        "Content-type": "application/json",
    },
});
export const UseQuery_GetAllUsers = () => {
    return useQuery(QueryKeys.GET_ALL_USERS, async () => {
        return SetupAPI.get("/api/").then((res:any) => {
            return res.data;
        });
    });
};
