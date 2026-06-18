import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { ActivitesPage } from './components/page/vitrine/activites'
import { HebergementsPage } from './components/page/vitrine/hebergements'
import { VitrineHomePage } from './components/page/vitrine'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
