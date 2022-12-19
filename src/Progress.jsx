import React from 'react'

const Progress = ({wd}) => {
    return (
        <div className="col-span-1 bg-gray-400 rounded-full h-3 mt-2"><div className={`bg-blue-300 ${wd} h-3  rounded-full text-center`}></div></div>
    )
}

export default Progress