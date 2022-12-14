import React from 'react';
import Image from 'next/image';
import Profile from '../public/profile.jpg';

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-8">
            <div className="flex flex-col-reverse p-2 sm:flex-row items-start">
                <div className="flex flex-col pr-8 ">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                        Nawed Ali
                    </h1>
                    <h2 className="text-white mb-4">
                        Full-Stack Web3.0 Developer building{' '}
                        <a href="https://www.10xfs.io/"><span className="font-semibold">Invade</span></a>
                    </h2>
                    <p className="text-gray-200 mb-2">
                        Auth0 Ambassador, MLH Prep Fellow & Mentor
                    </p>
                    <p className="text-gray-200 mb-8">
                        Building awesome stuff via Open-Source, Web 3.0 and Hackathons.
                        Developer, Learner and Writer
                    </p>
                    <iframe src="https://github.com/sponsors/nawed2611/button" title="Sponsor nawed2611" className='border-2 rounded-lg' height="35" width="116" />
                </div>

                <div className="w-[80px] sm:w-[176px] hover:scale-[1.02] relative mb-4 sm:mb-0 mr-auto">
                    <Image src={Profile} alt="Nawed Ali" height={176} width={176} sizes="30vw" className="rounded-full filter drop-shadow-lg" />
                </div>
            </div>
        </div>
    )
}

export default Home