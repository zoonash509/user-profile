import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { APP_ROUTES } from 'helpers/links'
import UserTable from 'components/table-pagination'
import UserProfilePage from 'components/user-profile'

const Router: FC = () => {
    return (
        <>
            <Routes>
              <Route path={APP_ROUTES.USER_PROFILE} element={<UserProfilePage />} />
              <Route path='/' element={<UserTable />} />
            </Routes>
        </>
      )
}

export default Router