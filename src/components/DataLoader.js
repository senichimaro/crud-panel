import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const DataLoader = ({ getF = ()=>{}, resourceName, children }) => {
    const [state, setState] = useState({})
    const { isAuthenticated } = useAuth0();

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