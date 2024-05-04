import { Outlet } from 'react-router-dom'
import { StyledAppLayout } from './AppLayout.style'
import SideBar from '../../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <SideBar>
        <Outlet />
      </SideBar>
    </StyledAppLayout>
  )
}

export default AppLayout
