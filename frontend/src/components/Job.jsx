import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <div className='p-5 rounded-lg shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark className="h-4 w-4" /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg text-gray-900 dark:text-white'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>India</p>
                </div>
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
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7] hover:bg-[#5f0799] text-white">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job