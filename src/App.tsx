import {useMemo} from 'react'
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material"
import { Palette, createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { useAppSelector } from "./store/hooks"
import Dashboard from './scenes/dashboard' 
import Layout from './scenes/layout'

import {BrowserRouter , Routes , Route, Navigate } from "react-router-dom"
import Owner from './scenes/add-owner'
import Driver from './scenes/add-driver'
import Complaint from './scenes/add-complaint'
import ViewComplaints from './scenes/view-complaints'
import ViewDriver from './scenes/view-driver'
import ViewVehicle from './scenes/view-vehicle'




function App() {

  const mode = useAppSelector((state)=>state.mode.mode)

  const theme = useMemo (()=>createTheme(themeSettings(mode)), [mode])


  return (
    <div className="app">
      <BrowserRouter>
   <ThemeProvider theme= {theme}>
    {/* it resets everything in terms of your css */}
    <CssBaseline />
   <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/viewdashboard" replace/>}/>
      <Route path="/viewdashboard" element={<Dashboard/>}/>
      <Route path="/Owner" element={<Owner/>}/>
      <Route path="/Driver" element={<Driver/>}/>
      <Route path="/Complaint" element={<Complaint/>}/>
      <Route path="/ViewComplaints" element={<ViewComplaints/>}/>
      <Route path="/ViewDrivers" element={<ViewDriver/>}/>
      <Route path="/ViewVehicles" element={<ViewVehicle/>}/>

      </Route>
   </Routes>
   </ThemeProvider>
   </BrowserRouter>
    </div>
  )
}

export default App
