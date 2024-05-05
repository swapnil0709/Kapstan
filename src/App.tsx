import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Applications from './pages/Applications'
import Connections from './pages/Connections'
import Cost from './pages/Cost'
import Security from './pages/Security'
import NotFoundPage from './pages/PageNotFound'
import Admin from './pages/Admin'
import Docs from './pages/Docs'
import Overview from './ui/layout/ApplicationsLayout/Overview'
import EnvironmentVariables from './ui/layout/ApplicationsLayout/EnvironmentVariables/EnvironmentVariables'
import AppLayout from './ui/layout/AppLayout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate replace to="applications/overview" />}
          />
          <Route path="applications" element={<Applications />}>
            <Route index element={<Navigate replace to="overview" />} />
            <Route path="overview" element={<Overview />} />
            <Route
              path="environment-variables"
              element={<EnvironmentVariables />}
            />
            <Route path="alerts" element={<>Test</>} />
            <Route path="event-history" element={<>Test</>} />
          </Route>
          <Route path="connections" element={<Connections />} />
          <Route path="cost" element={<Cost />} />
          <Route path="security" element={<Security />} />
          <Route path="admin" element={<Admin />} />
          <Route path="docs" element={<Docs />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
