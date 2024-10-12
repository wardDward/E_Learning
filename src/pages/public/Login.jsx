import Logo from '../../assets/public/logo.png'
import Google from '../../assets/public/google_logo.png'
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className="h-screen flex justify-center items-center bg-lightGray">
            <div className="bg-white w-full md:w-[50%] lg:w-[30%] xl:w-[25%] p-2 rounded-md shadow-lg flex flex-col">
                <div className='flex items-center flex-col mb-5'>
                    <img src={Logo} className='w-[150px] h-[150px] ' alt="logo" />
                    <div>
                        <div className='text-charcoal text-sm font-bold text-center'>
                            EduVenture                    </div>
                        <div className='text-charcoal text-xs text-center'>
                            Empower your mind, one click at a time. Learning knows no boundaries.
                        </div>
                    </div>
                </div>
                <div className='px-5 pb-4'>
                    <form autoComplete='off'>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-charcoal text-[16px]'>Email</label>
                            <input type="text" name="email" id="email" placeholder='Enter Email' className='mt-1 border-darkGray border-[1px] p-[5px] w-full rounded-md' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label htmlFor="email" className='text-charcoal text-[16px]'>Email</label>
                            <input type="text" name="email" id="email" placeholder='Enter Email' className='mt-1 border-darkGray border-[1px] p-[5px] w-full rounded-md' />
                        </div>
                        <div className='mt-2'>
                            <button type="submit" className='w-full bg-navyBlue text-white p-[4px] tracking-wide font-[200] hover:bg-darkGray hover:text-black hover:font-[400] rounded-md'>Sign In</button>
                        </div>
                        <div className='mt-[20px]'>
                            <div className='w-full border-[1px] border-darkGray p-[3px] flex justify-center items-center rounded-md hover:bg-lightGray cursor-pointer'>
                                <img src={Google} alt="Google" className='h-[30px] w-[30px]' />
                                <span className='text-charcoal ml-2 text-sm'>
                                    Sign in using Google
                                </span>
                            </div>
                            <div className="mt-[10px] text-sm text-center text-darkGray">
                                {"don't have an account? "}
                                <Link to="/register" className='text-blue-500 hover:underline'>Sign up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
