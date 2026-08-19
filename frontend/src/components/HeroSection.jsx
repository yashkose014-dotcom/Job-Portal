import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-gray-600 dark:text-gray-300 max-w-xl mx-auto'>Find thousands of job opportunities across top companies and launch your career today.</p>
                <div className='flex w-full sm:w-[70%] md:w-[45%] shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 pl-4 rounded-full items-center gap-4 mx-auto transition-colors'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#5b30a6] text-white">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection