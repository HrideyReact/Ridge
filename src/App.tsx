import { createTheme, ThemeProvider } from '@mui/material';
import Header from './Layouts/Header';
import SideBar from './Layouts/SideBar';
import ridgeTheme from './Theme';
import { Route, Routes } from "react-router-dom";
import { Home, Products, SeoAnalysis } from "./Pages";




//Setting default themes to across the website
const theme= createTheme(ridgeTheme);

function App() {

  return (
    <ThemeProvider theme={theme} >
      <SideBar>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/seo-analysis' element={<SeoAnalysis/>} />
      </Routes>
    </SideBar>
    </ThemeProvider>
  );
}

export default App;
