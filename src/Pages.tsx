import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./login/Login";
import {NewLogin} from "./login/NewLogin";
import {Registration} from "./login/Registration";
import {UpdateLogin} from "./login/UpdateLogin";
import {TestComponents} from "./TestComponents";
import {ErrorPage} from "./ErrorPage";


export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    TEST:'/testComponents',
    UPDATE_LOGIN:'/updateLogin',
    NEW_LOGIN:'/newLogin'

}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>


                <Route path={'/login/*'} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>

                <Route path={'/registration/*'} element={<Navigate to={PATH.REGISTRATION}/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>

                <Route path={'/newLogin/*'} element={<Navigate to={PATH.NEW_LOGIN}/>}/>
                <Route path={PATH.NEW_LOGIN} element={<NewLogin/>}/>

                <Route path={'/updateLogin/*'} element={<Navigate to={PATH.UPDATE_LOGIN}/>}/>
                <Route path={PATH.UPDATE_LOGIN} element={<UpdateLogin/>}/>

                <Route path={'/testComponents/*'} element={<Navigate to={PATH.TEST}/>}/>
                <Route path={PATH.TEST} element={<TestComponents/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

                <Route path={'/*'} element={<ErrorPage/>}/>

            </Routes>
        </div>
    )
}

export default Pages
