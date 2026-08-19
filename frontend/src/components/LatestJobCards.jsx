import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-lg shadow-sm hover:shadow-xl transition-all bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg text-gray-900 dark:text-white'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500 dark:text-gray-400'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-gray-900 dark:text-white'>{job?.title}</h1>
                <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4 flex-wrap'>
                <Badge className={'text-blue-700 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/40'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] dark:text-red-400 font-bold bg-red-50 dark:bg-red-950/40'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-950/40'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards