import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

export const PrivateDataLoader = ({ userID, children }) => {
    const [state, setState] = useState()
    const { isAuthenticated } = useAuth0();

    // useEffect(() =>{
    //     (async () => {
    //         const response
    //     })()
    // },[])

    return (
        <>
        {
            React.Children.map(children, child => {
                if( React.isValidElement(child) ){
                    return React.cloneElement(child, {...isAuthenticated, userID})
                }
                return child
            })
        }
        </>
    )
}