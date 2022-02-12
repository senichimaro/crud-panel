import React, { useState, useEffect } from 'react'

export const DataLoader = ({ getF = ()=>{}, resourceName, children }) => {
    const [state, setState] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const response = await getF()
                if (response.status == 200) setState(response.data.results)
            }
            catch(e){
                console.log('error at DataLoader.js')
            }
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