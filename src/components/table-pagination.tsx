import { Datatable } from "shared/components";
import { Box, Button, Icon, Input, TablePagination, TableRow, useTheme } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { useQueryClient } from "react-query";
import { QueryKeys } from "helpers/query-keys";
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { IUser, RandomUserData } from "models/IUser";
import { UseQuery_GetAllUsers } from "services/user-service";
import { Key, useContext, useEffect, useState } from "react";
import { IFilter } from "models/IFilter";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "helpers/links";
import { UserContext } from "helpers/context";

export default function UserTable() {
  const theme = useTheme();
  const { searchFilters, setSearchFilters } = useContext(UserContext);

  const navigate=useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const { data: user_data } = UseQuery_GetAllUsers();
  const [userData, setUserData]= useState<IUser[]>(user_data?.results)
  useEffect(()=>{
    if(user_data){
      setUserData(user_data?.results)
    }
  },[user_data])

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPageNumber(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPageSize(+event.target.value);
    setPageNumber(0);
  };

const handleFilter = () => {
    if (!userData) return;

    let filteredResults = user_data.results;
if(searchFilters?.fullName=='' && searchFilters?.email=='' && searchFilters?.gender=='' && searchFilters.phone=='' && searchFilters.cell==''){
  setUserData(user_data.results)
}
    if (searchFilters?.fullName) {
      const fullNameSearch = searchFilters.fullName.toLowerCase();
      filteredResults = filteredResults.filter(
        (user:any) =>
          user.name.first.toLowerCase().includes(fullNameSearch) ||
          user.name.last.toLowerCase().includes(fullNameSearch)
      );
    }

    if (searchFilters.gender !== undefined && searchFilters.gender !== '') {
      filteredResults = filteredResults.filter(
        (user: any) => user.gender.toLowerCase()?.includes(searchFilters.gender!.toLowerCase())
      );
    }

    if (searchFilters.email !== undefined && searchFilters.email !== '') {
      filteredResults = filteredResults.filter(
        (user:any)=> user.email.toLowerCase().includes(searchFilters.email!.toLowerCase())
      );
    }

    if (searchFilters.phone !== undefined && searchFilters.phone !== '') {
      filteredResults = filteredResults.filter(
        (user:any) => user.phone.toLowerCase().includes(searchFilters.phone!.toLowerCase())
      );
    }
    if (searchFilters.cell !== undefined && searchFilters.cell !== '') {
      filteredResults = filteredResults.filter(
        (user:any) => user.cell.toLowerCase().includes(searchFilters.cell!.toLowerCase())
      );
    }


    setPageNumber(0);
    setUserData(filteredResults)
    return filteredResults;
  };


  return (
    <div>
      <Datatable
        theme={theme}
        variant={"basic"}
        theadChildren={
          <>
            <TableRow key={0}>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Cell Number</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow key={1} className="filters-row">
              <TableCell className="checkbox-cell"></TableCell>
              <TableCell>
                <div className="table-filter">
                  <Input
                    fullWidth={true}
                    placeholder={"Search..."}
                    type="text"
                    startAdornment={undefined}
                    endAdornment={undefined}
                    id={""}
                    value={searchFilters.fullName || ""}
                    onChange={(e) => {
                      setSearchFilters({
                        ...searchFilters,
                        fullName: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      handleFilter();
                    }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="table-filter">
                  <Input
                    fullWidth={true}
                    placeholder={"Search..."}
                    type="text"
                    startAdornment={undefined}
                    endAdornment={undefined}
                    id={""}
                    value={searchFilters.gender || ""}
                    onChange={(e) => {
                      setSearchFilters({
                        ...searchFilters,
                        gender: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      handleFilter();
                    }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="table-filter">
                  <Input
                    fullWidth={true}
                    placeholder={"Search..."}
                    type="text"
                    startAdornment={undefined}
                    endAdornment={undefined}
                    id={""}
                    value={searchFilters.email || ""}
                    onChange={(e) => {
                      setSearchFilters({
                        ...searchFilters,
                        email:e.target.value,
                      });
                    }}
                    onBlur={() => {
                      handleFilter();
                    }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="table-filter">
                  <Input
                    fullWidth={true}
                    placeholder={"Search..."}
                    type="text"
                    startAdornment={undefined}
                    endAdornment={undefined}
                    id={""}
                    value={searchFilters.phone || ""}
                    onChange={(e) => {
                      setSearchFilters({
                        ...searchFilters,
                        phone:e.target.value,
                      });
                    }}
                    onBlur={() => {
                      handleFilter();
                    }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="table-filter">
                  <Input
                    fullWidth={true}
                    placeholder={"Search..."}
                    type="text"
                    startAdornment={undefined}
                    endAdornment={undefined}
                    id={""}
                    value={searchFilters.cell || ""}
                    onChange={(e) => {
                      setSearchFilters({
                        ...searchFilters,
                        cell: e.target.value,
                      });
                    }}
                    onBlur={() => {
                      handleFilter();
                    }}
                  />
                </div>
              </TableCell>
              <TableCell className="action-cell"></TableCell>
            </TableRow>
          </>
        }
        tbodyChildren={userData?.map((row: IUser, index: number) => (
          <TableRow key={index} className="child-tr">
            <TableCell><img src={row.picture.thumbnail}/></TableCell>
            <TableCell>{row.name.title+" "+row.name.first+" "+row.name.last}</TableCell>
            <TableCell>{row.gender}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.phone}</TableCell>
            <TableCell>{row.cell}</TableCell>
            <TableCell>
              <VisibilityIcon
                onClick={() => {
                  navigate('/user-profile/'+ row.name.first)
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      />
       <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={user_data ? user_data?.info?.results : -1}
        rowsPerPage={pageSize}
        page={pageNumber}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        SelectProps={{
          IconComponent: KeyboardArrowDownSharpIcon,
        }}
      />
    </div>
  );
}
