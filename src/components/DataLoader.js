import React, { useState, useEffect } from 'react'

export const DataLoader = ({ getF = ()=>{}, resourceName, children }) => {
    const [state, setState] = useState({})

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
                    return React.cloneElement(child, {[resourceName]: state})
                }
                return child;
            })
        }
        </>
    )
}