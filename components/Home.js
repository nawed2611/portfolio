import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-8">
            <div className="flex flex-col-reverse sm:flex-row items-start">
                <div className="flex flex-col pr-8 ">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">
                        Nawed Ali
                    </h1>
                    <h2 className="text-gray-200 mb-4">
                        Full Stack Developer building{' '}
                        <span className="font-semibold">TweepsBook</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Building awesome stuff via Open-Source, Web 3.0 and Hackathons.
                        Developer, Learner and Writer
                    </p>
                    <iframe src="https://github.com/sponsors/nawed2611/button" title="Sponsor nawed2611" height="35" width="116" />
                </div>

                <div className="w-[80px] sm:w-[176px] hover:scale-[1.02] relative mb-4 sm:mb-0 mr-auto">
                    <img src="https://pbs.twimg.com/profile_images/1541300431623598080/QNrH1wh1_400x400.jpg"
                        height={176}
                        width={176}
                        sizes="30vw"
                        className="rounded-full filter"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home