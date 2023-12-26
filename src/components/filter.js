import React from 'react'

function Filter ({filterData , department, setDepartment}) {


    //filter handler function 

    function filterHandler( title ) {
        setDepartment(title);
        console.log(title)
    }

    return (
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
            {filterData.map ( (data) => {
                return (
                <button onClick={() => filterHandler(data.title)} className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2`}>
                    {data.title}
                </button>
                )
            })}
        </div>
    )
}


export default Filter;