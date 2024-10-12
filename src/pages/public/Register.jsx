import Google from '../../assets/public/google_logo.png'
import { Link } from 'react-router-dom'



export default function Register() {
    return (
        <div className="h-screen flex justify-center items-center bg-lightGray">
            <div className="bg-white w-full md:w-[50%] lg:w-[30%] xl:w-[25%] p-2 rounded-md shadow-lg flex flex-col">
                <div className='flex items-center flex-col mb-5'>
                    <div>
                        <div className='text-charcoal text-sm font-bold text-center'>
                            Welcome to EduVenture
                        </div>
                        <div className='text-charcoal text-xs text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magnam!
                        </div>
                    </div>
                </div>
                <div className='px-5 pb-4'>
                    <form autoComplete='off'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='text-charcoal text-xs'>Name</label>
                            <input type="text" name="name" id="name" className='mt-1 border-darkGray border-[1px] p-[5px] w-full rounded-md' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email" className='text-charcoal text-xs'>Email</label>
                            <input type="text" name="email" id="email" className='mt-1 border-darkGray border-[1px] p-[5px] w-full rounded-md' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email" className='text-charcoal text-xs'>Password</label>
                            <input type="text" name="email" id="email" className='mt-1 border-darkGray border-[1px] p-[5px] w-full rounded-md' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email" className='text-charcoal text-xs'>Confirm Password</label>
                            <input type="text" name="email" id="email" className='mt-1 border-darkGray border-[1px] p-[5px] w-full rounded-md' />
                        </div>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-navyBlue"></div>
                            <span className="ms-2 text-charcoal text-xs"> Agree to Privacy Policy</span>
                        </label>

                        <div className='mt-2'>
                            <button type="submit" className='w-full bg-navyBlue text-white p-[4px] tracking-wide font-[200] hover:bg-darkGray hover:text-black hover:font-[400] rounded-md'>Sign Up</button>
                        </div>
                        <div className='mt-[20px]'>
                            <div className='w-full border-[1px] border-darkGray p-[3px] flex justify-center items-center rounded-md hover:bg-lightGray cursor-pointer'>
                                <img src={Google} alt="Google" className='h-[30px] w-[30px]' />
                                <span className='text-charcoal ml-2 text-sm'>
                                    Sign up using Google
                                </span>
                            </div>
                            <div className="mt-[10px] text-sm text-center text-darkGray">
                                {"Already have an account? "}
                                <Link to="/login" className='text-blue-500 hover:underline'>Sign In</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
