import React, {useState} from 'react';
import './App.css';
import {localStorageLoginGet} from "./utils/utilsFunc/localStorageAuthLogin";
import {Navigate, Route, Routes} from "react-router-dom";
import RoutePath from "./utils/constants/Route";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OnlineStorePage from "./pages/OnlineStorePage";
import HeaderBar from "./components/layout/HeaderBar";
import { WebSocketProvider } from './components/WebSocket';

function App() {
  const login = localStorageLoginGet();
  const [isAuth , setAuth] = useState(!!login)

  return (
   <WebSocketProvider>
    <div className="App">
      {isAuth && <header>
            <HeaderBar setAuth={setAuth}/>
      </header>}
      <Routes>
        <Route path={RoutePath.HOME_PAGE} element={<HomePage/>}/>
        <Route path={RoutePath.LOGIN_PAGE} element={<LoginPage setAuth={setAuth}/>}/>
        <Route path={RoutePath.ONLINE_STORE_PAGE} element={<OnlineStorePage/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </div>
   </WebSocketProvider>
  );
}

export default App;
