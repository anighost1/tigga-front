
import SignupCard from './SignupCard'
import './page.css'

const Signup = () => {
    return (
        <>
            <div className='flex flex-col gap-20 justify-center items-center h-[100vh]'>
                {/* <h1 className='p-6 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
                    Tigga
                </h1> */}
                <SignupCard />
            </div>
        </>
    )
}

export default Signup