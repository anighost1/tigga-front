"use client"

import './page.css'
import ServiceCard from '@/app/home/serviceCard'

const Home = () => {

    const dummyData = [
        {
            _id: 1,
            name: 'ATDO',
            description: 'A todo application by AT to maintain your rozmarra ke kaam',
            link: 'https://atdo.tigga.in/'
        }
    ]

    return (
        <div className="pt-16">
            <div className='flex flex-row flex-wrap gap-10 justify-center items-start h-[92%] p-4 fixed overflow-y-scroll w-full'>
                {
                    dummyData.map((item, index) => (
                        <ServiceCard key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home