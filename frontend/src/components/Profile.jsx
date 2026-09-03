import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors pb-10">
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl my-5 p-8 shadow-sm transition-colors'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24 border border-gray-200 dark:border-gray-700">
                            <AvatarImage src={user?.profile?.profilePhoto || "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"} alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl text-gray-900 dark:text-white'>{user?.fullname}</h1>
                            <p className="text-gray-600 dark:text-gray-300">{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen className="h-4 w-4" /></Button>
                </div>
                <div className='my-5 text-gray-700 dark:text-gray-300'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail className="h-4 w-4" />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact className="h-4 w-4" />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className="font-semibold text-gray-900 dark:text-white mb-2">Skills</h1>
                    <div className='flex items-center gap-1 flex-wrap'>
                        {
                            user?.profile?.skills?.length ? user?.profile?.skills.map((item, index) => <Badge key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">{item}</Badge>) : <span className="text-gray-500">NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold text-gray-900 dark:text-white">Resume</Label>
                    {
                        user?.profile?.resume ? <a target='_blank' rel='noreferrer' href={user?.profile?.resume} className='text-blue-500 dark:text-blue-400 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName || "View Resume"}</a> : <span className="text-gray-500">NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors'>
                <h1 className='font-bold text-lg mb-5 text-gray-900 dark:text-white'>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile