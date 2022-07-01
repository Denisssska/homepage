import React from 'react';
import {HashRouter} from "react-router-dom";
import Pages from "./Pages";
import {Header} from "./Header";

export const App = () => {
    return (
        <div>
            <HashRouter>

               <Header/>
                <Pages/>
            </HashRouter>

        </div>
    );
}

