import React from 'react'
import {NavLink} from "react-router-dom";
import c from './Header.module.css'

export const Header=() =>{
    return (
            <div className={c.container}>
                <div><NavLink className={c.nav1} to='/login/'>login</NavLink></div>
                <div><NavLink className={c.nav2} to='/registration'>registration</NavLink></div>
                <div><NavLink className={c.nav3} to='/newLogin'>newLogin</NavLink></div>
                <div><NavLink className={c.nav3} to='/updateLogin'>updateLogin</NavLink></div>
                <div><NavLink className={c.nav3} to='/testComponents'>testComponents</NavLink></div>
                <div><NavLink className={c.nav3} to='/testUseForm'>testUseForm</NavLink></div>
            </div>
    )
}
