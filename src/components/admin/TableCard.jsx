import React from "react";


const TableCard = () => {
    return (
        <div className="">
            <style>
                {`
                   
                    .number {
                        font-size: 1.25rem;
                         font-weight: bold;
                          padding: 0.5rem;
                    }
                    .card {
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        border: 1px solid #e5e7eb;
                        border-radius: 1rem;
                        padding: 2.5rem .75rem 1.25rem;
                        width: 100%;
                    }
                `}
            </style>


           <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 m-3">
                <div className="card w-full md:w-1/2 lg:w-1/4">
                    <p className="font-semibold">Table No</p>
                    <h1 className="number">1</h1>
                    <span className="inline-block px-2 py-1 text-green-600 bg-green-100 rounded-lg">
                        Vacant
                    </span>


                </div>


                <div className="card w-full md:w-1/2 lg:w-1/4">
                    <p className="font-semibold">Table No</p>
                    <h1 className="number">2</h1>
                    <span className="inline-block px-2 py-1 text-green-600 bg-green-100 rounded-lg">
                        Vacant
                    </span>


                </div>


                <div className="card w-full md:w-1/2 lg:w-1/4">
                    <p className="font-semibold">Table No</p>
                    <h1 className="number">3</h1>
                    <span className="inline-block px-2 py-1 text-green-600 bg-green-100 rounded-lg">
                        Vacant
                    </span>




                </div>


                <div className="card w-full md:w-1/2 lg:w-1/4">
                    <p className="font-semibold">Table No</p>
                    <h1 className="number">4</h1>
                    <span className="inline-block px-2 py-1 text-green-600 bg-green-100 rounded-lg">
                        Vacant
                    </span>


                </div>

            </div>
           </div>
        </div>
    );
};


export default TableCard;


