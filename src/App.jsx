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

export const UserStateContext = createContext();
export const NoticeStateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log("ttest");
      return { id: action.payload.id, nickname: action.payload.nickname };
    case 'LOGOUT':
      return { id: "", nickname: "" };
    default:
      return state;
  }
}

const App = () => {
  const [userInfo, dispatchUserInfo] = useReducer(reducer, { id: "", nickname: "" });
  const [noticeState, setNoticeState] = useState();
  return (
    <>
      {/* <Header /> */}
      <UserStateContext.Provider value={{ userInfo, dispatchUserInfo }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinMember />} />
          <Route path="/notice" element={<Notice />} />
          <NoticeStateContext.Provider value={{noticeState,setNoticeState}}>
            <Route path="/notice/view/:id" element={<View />} />
            <Route path="/notice/edit/:id" element={<Edit />} />
          </NoticeStateContext.Provider>
        </Routes>
      </UserStateContext.Provider>
    </>
  );
}

export default App;