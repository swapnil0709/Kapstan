import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Applications from './pages/Applications'
import Connections from './pages/Connections'
import Cost from './pages/Cost'
import Security from './pages/Security'
import NotFoundPage from './pages/PageNotFound'
import AppLayout from './ui/layout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="applications" />} />
          <Route path="applications" element={<Applications />} />
          <Route path="connections" element={<Connections />} />
          <Route path="cost" element={<Cost />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
