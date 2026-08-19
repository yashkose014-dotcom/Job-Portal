import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    }
    return (
        <div className='bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors px-4'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <Link to="/"><h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Job<span className='text-[#F83002]'>Portal</span></h1></Link>
                </div>
                <div className='flex items-center gap-6 md:gap-8'>
                    <ul className='flex font-medium items-center gap-5 text-gray-700 dark:text-gray-200'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies" className="hover:text-[#6A38C2] transition-colors">Companies</Link></li>
                                    <li><Link to="/admin/jobs" className="hover:text-[#6A38C2] transition-colors">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className="hover:text-[#6A38C2] transition-colors">Home</Link></li>
                                    <li><Link to="/jobs" className="hover:text-[#6A38C2] transition-colors">Jobs</Link></li>
                                    <li><Link to="/browse" className="hover:text-[#6A38C2] transition-colors">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    <ThemeToggle />

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer border border-gray-200 dark:border-gray-700">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                                    <div className=''>
                                        <div className='flex gap-2 space-y-2'>
                                            <Avatar className="cursor-pointer border border-gray-200 dark:border-gray-700">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium text-gray-900 dark:text-white'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600 dark:text-gray-300'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer hover:text-[#6A38C2]'>
                                                        <User2 className="h-4 w-4" />
                                                        <Button variant="link" className="p-0 text-inherit"> <Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                )
                                            }

                                            <div className='flex w-fit items-center gap-2 cursor-pointer hover:text-red-500'>
                                                <LogOut className="h-4 w-4" />
                                                <Button onClick={logoutHandler} variant="link" className="p-0 text-inherit">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Navbar