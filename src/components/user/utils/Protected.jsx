import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
    const cart = useSelector(state => state.cart.products)
    const { table, branch_id } = useSelector((state) => state.cart);

    let tableAndBranch = `/?table=${table}&branch_id=${branch_id}`;

    if(cart?.length > 0 ){
        return <> {children} </>
    }else{
        return <Navigate to={tableAndBranch} />
    }
}

export default Protected