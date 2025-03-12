import "./App.css";
import { useReducer, useRef, createContext, useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JoinMember from "./pages/JoinMember";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Header from "./components/Header";
import { handleContentsClick } from "./util/noticeclick";
import View from "./pages/View";
import Edit from "./pages/Edit";
import Test from "./components/LoginForm";
import Community from "./pages/community";

export const UserStateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { id: action.payload.id };
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

const App = () => {
  const initialUserInfo = sessionStorage.getItem('loginData')
    ? JSON.parse(sessionStorage.getItem('loginData'))
    : null;
  const [userInfo, dispatchUserInfo] = useReducer(reducer, initialUserInfo);
  return (
    <>
    {/* <Test/> */}
      <UserStateContext.Provider value={{ userInfo, dispatchUserInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinMember />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/view/:id" element={<View />} />
          <Route path="/notice/edit/:id" element={<Edit />} />
        </Routes>
      </UserStateContext.Provider>
    </>
  );
}

export default App;