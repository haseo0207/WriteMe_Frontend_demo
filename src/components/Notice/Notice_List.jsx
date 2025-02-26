import React from 'react'
import "./Notice_List.css"
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa6";
import { DiaryStateContext } from "../../App";
import { useState, useContext } from "react";
import { DiaryDispatchContext } from "../../App";
const Notice_List = ({noticelist}) => {

    // const noticelist = useContext(DiaryStateContext);
    const {handleContentsClick} = useContext(DiaryDispatchContext);
    return (
        <li className="notice-item" onClick={() => handleContentsClick(noticelist)}>
            <div className="info-l">
                <span className="listname">
                    {noticelist.title}
                </span>
                <span className="listtime">
                    {noticelist.time}
                </span>

            </div>
            <div className="info-r">
                <span className='listwirte'>
                    <CgProfile className = "profileicon"/>
                    {noticelist.name}
                </span>
                <span className='listview'>
                    <FaRegEye className = "viewicon"/>
                    {noticelist.view}
                </span>


            </div>
        </li>
    )
}

export default Notice_List