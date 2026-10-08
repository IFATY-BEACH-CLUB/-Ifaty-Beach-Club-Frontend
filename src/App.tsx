import { useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { ActivitesPage } from './components/page/vitrine/activites'
import { HebergementsPage } from './components/page/vitrine/hebergements'
import { PartenairesPage } from './components/page/vitrine/partenaires'
import { VitrineHomePage } from './components/page/vitrine'
import { AdminLogin } from './admin/AdminLogin'
import { ProtectedRoute } from './admin/ProtectedRoute'
import { AdminLayout } from './admin/AdminLayout'
import { adminSections } from './admin/sections.js'

function HashScroll() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.getElementById(location.hash.replace('#', ''))
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.pathname, location.hash])

  return null
}

function RootLayout() {
  return (
    <>
      <HashScroll />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<VitrineHomePage />} />
          <Route path="/hebergements" element={<HebergementsPage />} />
          <Route path="/activites" element={<ActivitesPage />} />
          <Route path="/partenaires" element={<PartenairesPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={adminSections[0].path} replace />} />
            {adminSections.map(({ key, path, component: Section }) => (
              <Route key={key} path={path} element={<Section />} />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
