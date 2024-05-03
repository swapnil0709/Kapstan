import { Outlet } from 'react-router-dom'
// import Navbar from '../navbar/Navbar'
import { StyledAppLayout } from './AppLayout.style'
import Sidebar from '../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <StyledAppLayout>
      {/* <Navbar /> */}
      <Sidebar>
        <Outlet />
      </Sidebar>
    </StyledAppLayout>
  )
}

export default AppLayout
