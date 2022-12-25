import Head from 'next/head';
import Image from 'next/image';
import React, { memo } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithGoogle } from '../../firebase/firebase';
const Hero = memo(() => {
  const provider = new GoogleAuthProvider();
  const singGoogle = () => {
    signInWithGoogle(provider)
  };
  return (
    <div>
      <Head>
        <title>Login | Disney+</title>
      </Head>
      <div className='relative || min-h-[calc(100vh-70px)]'>
        <Image src="/images/hero-background.jpg" layout='fill' objectFit='cover' />
      </div>
      <div className="absolute || min-h-[calc(100vh-70px)] ||  md:w-[60%] left-1/2 || -translate-x-1/2 || bottom-0 || flex || justify-center || items-center || w-full">
        <div className="">
          <Image src="/images/cta-logo-one.svg" width="600" height="150" objectFit='cover' />
          <button onClick={singGoogle} className='bg-blue-600 w-full mt-4  uppercase transition-colors duration-500  py-4 px-6 hover:bg-[#0485ee] rounded-sm tracking-wide text-xl font-semibold'>
            Get All There
          </button>
          <p className="text-sm text-center my-4">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p>
          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
            className='mb-[70px]  mx-auto'
          />
        </div>
      </div>
    </div>
  );
});

export default Hero;