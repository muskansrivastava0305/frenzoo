import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
    const cart = useSelector(state => state.cart.products)

    // if(cart?.length > 0 ){
    //     return <> {children} </>
    // }else{
    //     return <Navigate to="/?table=4&branch_id=1" />
    // }
    return (
        <>
        {children}
        </>
    )
}

export default Protected