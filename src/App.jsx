import "./App.css";
import { useReducer, useRef, createContext, useCallback,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JoinMember from "./pages/JoinMember";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Header from "./components/Header";
import {handleContentsClick} from "./util/noticeclick";
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [noticelist, setNoticeList] = useState([
    { id: 1, title: "제목1", name: "관리자", view:1 ,time:"11:00",contents:"test1",usrid:"11"},
    { id: 2, title: "제목2", name: "관리자", view:1 ,time:"12:00",contents:"test2",usrid:"22"},
    { id: 3, title: "제목3", name: "관리자", view:1 ,time:"13:00",contents:"test3",usrid:"33"},
    { id: 4, title: "제목4", name: "관리자", view:1 ,time:"14:00",contents:"test4",usrid:"44"},
    { id: 5, title: "제목5", name: "관리자", view:1 ,time:"15:00",contents:"test5",usrid:"55"},
  ]);

  return (
    <>
      <Header />
      <DiaryStateContext.Provider value={noticelist}>
      <DiaryDispatchContext.Provider
          value={{
            handleContentsClick
          }}
        >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinMember />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;