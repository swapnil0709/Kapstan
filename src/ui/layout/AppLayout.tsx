import { Outlet } from 'react-router-dom'
// import Navbar from '../navbar/Navbar'
import { StyledAppLayout, StyledMain } from './AppLayout.style'
import Sidebar from '../sidebar/Sidebar'

const AppLayout = () => {
  return (
    <StyledAppLayout>
      {/* <Navbar /> */}
      <Sidebar>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </Sidebar>
    </StyledAppLayout>
  )
}

export default AppLayout
