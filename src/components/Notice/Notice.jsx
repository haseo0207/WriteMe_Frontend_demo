import React from 'react'
import "./Notice.css"
import Notice_List from './Notice_List';
import { DiaryStateContext } from "../../App";
import { useState, useContext } from "react";
const Notice = () => {
    const noticelist = useContext(DiaryStateContext);
    return (
        <>
            <ul className='noticelist'>
                {noticelist.map(expense => {
                    return (<Notice_List
                        key = {expense.id}
                        noticelist = {expense}
                    />)
                })}
            </ul>
        </>
    )
}

export default Notice