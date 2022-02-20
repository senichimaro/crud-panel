import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { regexUserID } from '../services/services';
import { useDispatch } from 'react-redux'
import { setCurrentUserID } from '../redux/reducers'

export const DataLoader = ({ getF = ()=>{}, resourceName, children }) => {
    const [state, setState] = useState({})
    const { isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch()
    if (isAuthenticated) dispatch(setCurrentUserID(regexUserID(user.sub)))

    useEffect(() => {
        (async () => {
            const response = await getF()
            setState(response)
        })()
    }, [getF])
    
    return (
        <>
        {
            React.Children.map(children, child =>{
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {...{[resourceName]: state}, isAuthenticated})
                }
                return child;
            })
        }
        </>
    )
}