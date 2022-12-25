import Image from 'next/image';
import React, { memo } from 'react';

const Brands = memo(() => {
    const style={
        vidDiv:"border-white || border || group || flex || duration-300 || border-opacity-10 || shadow-xl || cursor-pointer || border-[3px] ||  hover:border-opacity-100 ||  w-[230px] ||  h-36 ||  rounded-lg || relative || overflow-hidden",
        imgContainer:"relative || flex || w-full || h-full || z-10",
        vid:"absolute || flex || top-0 || opacity-0 || invisible || group || left-0 || w-full || h-full || object-cover"
    }
    return (
        <section className='container || py-10 || mx-auto'>
            <div className='flex || gap-3 || flex-wrap || items-center || justify-center'>
                <div className={style.vidDiv}>
                    <div className={style.imgContainer}>
                        <Image alt="Brands" src="/images/disnep.png" layout='fill' objectFit='cover' />
                    </div>
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    className={style.vid}
                    >
                        <source src='/videos/disney.mp4' type="video/mp4"/>
                    </video>
                </div>
                <div className={style.vidDiv}>
                    <div className={style.imgContainer}>
                        <Image alt="Brands1" src="/images/pixar.png" layout='fill' objectFit='cover' />
                    </div>
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    className={style.vid}
                    >
                        <source src='/videos/pixar.mp4' type="video/mp4"/>
                    </video>
                </div>
                <div className={style.vidDiv}>
                    <div className={style.imgContainer}>
                        <Image alt="Brands" src="/images/marvel.png" layout='fill' objectFit='cover' />
                    </div>
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    className={style.vid}
                    >
                        <source src='/videos/marvel.mp4' type="video/mp4"/>
                    </video>
                </div>
                <div className={style.vidDiv}>
                    <div className={style.imgContainer}>
                        <Image alt="Brands2" src="/images/starwars.png" layout='fill' objectFit='cover' />
                    </div>
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    className={style.vid}
                    >
                        <source src='/videos/star-wars.mp4' type="video/mp4"/>
                    </video>
                </div>
                <div className={style.vidDiv}>
                    <div className={style.imgContainer}>
                        <Image alt="Brands3" src="/images/national-geographic.png" sizes='100%' layout='fill' objectFit='cover' />
                    </div>
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    className={style.vid}
                    >
                        <source src='/videos/national-geographic.mp4' type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    );
});

export default Brands;