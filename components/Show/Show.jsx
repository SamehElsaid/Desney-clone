import Image from 'next/image';
import { useSelector } from 'react-redux';
import Hero from "../Hero/Hero"
import { PlayIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';
import Head from 'next/head';
const Show = ({ res, topRated }) => {
    const [openVideo, setOpenVideo] = useState(false)
    const IMG_URL = `https://image.tmdb.org/t/p/original`
    const login = useSelector(ele => ele.auth.isLoggedin)
    const router = useRouter()
    useEffect(()=>{
        if(!login){
            setTimeout(()=>{
                router.push("/")
            },3000)
        }
    },[login])
    return (
        <div>
            <Head>
            <title>Disney+</title>
            </Head>
            {login ?
                res &&
                <section>
                    <Head>
                        <title>{res.title || res.original_name} || Disney+</title>
                    </Head>
                    <div className='relative  || min-h-[calc(100vh-70px)]'>
                        <div className="absolute inset-0 w-full h-full showControl z-10"></div>
                        <Image layout='fill' sizes='100%' objectFit='cover' loading='lazy'
                            src={`${IMG_URL}${res.poster_path}` || `${res.poster_path}` || `${IMG_URL}${res.backdrop_path}`} alt={"Poster"} />
                    </div>
                    <div className="absolute || bottom-0 || z-10  || py-5 || w-full">
                        <div className="container || mx-auto">
                            <h1 className='text-3xl || w-[100%] md:w-[80%] || md:text-5xl || font-semibold'>{res.title || res.original_name}</h1>
                            <div className="w-[80%]">
                                <div className="flex flex-wrap gap-4 items-center || mt-8">
                                    <button className='flex items-center gap-1 text-[#040714] || px-6 || py-2.5 
                                    || rounded-sm || text-base || border-white || hover:border-[#040714] 
                                    || border || bg-white || hover:bg-[#040714] || duration-500 || hover:text-white'>
                                        <PlayIcon className='w-5 h-5' />
                                        <span className='uppercase'>play</span>
                                    </button>
                                    <button onClick={() => { setOpenVideo(true) }} className='flex || items-center || gap-1 
                                    || text-white || px-6 || py-2.5 || rounded-sm || text-base || bg-black/30 || border-[#f9f9f9] 
                                    || border || hover:bg-[#f9f9f9] ||  duration-500 || hover:text-[#040714]'>
                                        <PlayIcon className='w-5 || h-5' />
                                        <span className='uppercase' >Trailer</span>
                                    </button>
                                    <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                                        <PlusIcon className="h-6" />
                                    </div>
                                    <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                                        <img src="/images/group-icon.svg" alt="" />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    {res.release_date || res.first_air_date}
                                    {res.seasons && <h2>•{" "} {res.seasons.length} seasons</h2>}
                                    {res.runtime &&
                                        ` • ${Math.floor(res.runtime / 60)}h ${res.runtime % 60}m`
                                    }
                                    <ul>
                                        {res.genres.map((genre, i) => <span key={i}> •{" "}{genre.name}</span>)}
                                    </ul>
                                    <h4 className="text-sm || md:text-lg || max-w-4xl || jd || mt-5">{res.overview}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${!openVideo ? `opacity-0 || invisible ` : ` opacity-1 || visible`} transition-visibility || bg-black/50 pt-32 || absolute || inset-0 || z-10`}>
                        <div className="w-[90%] md:w-[70%] bg-black p-3.5 mx-auto text-[#f9f9f9] flex justify-between items-center">
                            <h2>Play Trailer</h2>
                            <div onClick={() => { setOpenVideo(false) }} className="hover:bg-[#0f0f0f] || transition-colors || duration-500 || h-6 || w-6 || flex 
                            || items-center || justify-center || rounded-full">
                                <XMarkIcon className='h-5 || cursor-pointer ' />
                            </div>
                        </div>
                        <div className="pt-5 mx-auto  bg-black w-[90%] md:w-[70%]">
                            <div className="w-[100%] flex justify-center items-center relative mx-auto min-h-[200px] md:min-h-[350px]  bg-black">
                                {topRated[0] ?
                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${topRated[0].key}`} width={'100%'} height={"100%"}
                                        className="absolute inset-0"
                                        controls={true}
                                        playing={openVideo}
                                    />
                                    : <h2 className='text-2xl'>No Trailer Found</h2>
                                }
                            </div>
                        </div>
                    </div>
                </section>
                : <Hero />
            }
        </div>
    );
};

export default Show;