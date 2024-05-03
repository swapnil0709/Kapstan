import { Outlet } from 'react-router-dom'
import { StyledAppLayout } from './AppLayout.style'
import Sidebar from '../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </StyledAppLayout>
  )
}

export default AppLayout
