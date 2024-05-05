import { Outlet } from 'react-router-dom'
import SideBar from '../../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
    </>
  )
}

export default AppLayout
