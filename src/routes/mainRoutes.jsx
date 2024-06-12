import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from '../components/login/login';
import Register from '../components/register/register';
const MainRoutes = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>

            </Routes>

        </React.Fragment>
    );
}

export default MainRoutes;
