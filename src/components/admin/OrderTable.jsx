import React from 'react';

const OrderTable = ({ orderId, date , qyt, amount }) => {
    return (
        <tr className='  hover:bg-slate-200 '>
                <td className=" px-4 py-2">{orderId}</td>
                <td>{date}</td>
                <td>{qyt}</td>
                <td>{amount}</td>
              </tr>


    );
};

export default  OrderTable;