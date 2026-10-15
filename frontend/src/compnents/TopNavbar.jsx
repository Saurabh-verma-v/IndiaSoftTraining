import React from 'react'

const TopNavbar = () => {
    return (
        <>
            <section className='bg-[#0f4a85]'>
                <div className='max-w-7xl px-4 mx-auto flex justify-between py-2'>
                    {/* left */}
                    <div>
                        <ul className='flex items-center gap-5 text-sm'>
                            <li className='text-white/80 hover:text-white/100 cursor-pointer'>Block & Article</li>
                            <li className='text-white/80 hover:text-white/100 cursor-pointer'>News & Event</li>
                            <li className='text-white/80 hover:text-white/100 cursor-pointer'>Assesment</li>
                        </ul>
                    </div>
                    {/* right */}
                    <div>
                        <ul className='flex items-center gap-5 text-sm'>
                            <li className='text-white/80 hover:text-white/100 cursor-pointer'>Career With Us</li>
                            <li className='text-white/80 hover:text-white/100 cursor-pointer'>Student Zone</li>
                            <li className='text-white/80 hover:text-white/100 cursor-pointer'>Pay Online</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopNavbar