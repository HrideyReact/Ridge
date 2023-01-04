import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Header from './Layouts/Header';
import SideBar from './Layouts/SideBar';
import { Dashboard } from './Pages';
import ridgeTheme from './Theme';

//Setting default themes to across the website
const theme= createTheme(ridgeTheme);

function App() {

  return (
    <ThemeProvider theme={theme} >
      <SideBar>
        <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
      </Routes>
    </SideBar>
    </ThemeProvider>
  );
}

export default App;
