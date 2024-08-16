import React from 'react';

const RecentOrder = ({ orderId, dateTime, status }) => {
    return (
        <div className=' flex justify-between mr-8 my-4'>
            <div>
                <h1 className=' font-bold hover:text-red-700 hover:cursor-pointer'>{orderId}</h1>
                <p className=' text-sm font-light'>{dateTime}</p>
            </div>
            <div className=' items-center'>
                <p className=' text-green-700'>{status}</p>
            </div>
        </div>

    );
};

export default RecentOrder;