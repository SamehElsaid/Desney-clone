import Image from 'next/image';
import React, { memo } from 'react';
import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle, singout } from '../../firebase/firebase';
import { HomeIcon, MagnifyingGlassIcon, PlusIcon, StarIcon, FilmIcon, BuildingStorefrontIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_ACTICE_USER, SET_ACTICE_USER } from '../../Redux/authSlice/authSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
const style = {
    header: " container || mx-auto  || h-[70px] || flex || justify-between || items-center",
    headerBtn: 'ml-auto py-1.5 rounded font-medium tracking-wide uppercase border-white border px-4 hover:bg-white hover:text-[#040714]  transition duration-300'
}

const Header = memo(() => {
    const user = useSelector(ele => ele.auth)
    const dispatch = useDispatch()
    const provider = new GoogleAuthProvider();
    const singGoogle = () => {
        signInWithGoogle(provider)
    };
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(SET_ACTICE_USER({
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid,
            }))
        } else {
            dispatch(REMOVE_ACTICE_USER())
        }
    });
    const logoutsend = () => {
        singout()
    };
    return (
        <div className='sticky || top-0 || z-[1000]  || bg-[#040714] ||'>
            <div className={style.header}>
                <Link href={"/"}>
                    <Image src="/images/logo.svg"  className='cursor-pointer' width={80} height={80} alt="logo" />
                </Link>
                {user.isLoggedin &&
                    <div className='lg:flex || gap-7 || hidden'>
                        <Link href={"/"} className='headerLinkes'>
                            <HomeIcon className="h-4 w-4 " />
                            <span>Home</span>
                        </Link>
                        <a className='headerLinkes'>
                            <MagnifyingGlassIcon className="h-4 w-4 " />
                            <span>search</span>
                        </a>
                        <a className='headerLinkes'>
                            <PlusIcon className="h-4 w-4 " />
                            <span>watchList</span>
                        </a>
                        <a className='headerLinkes'>
                            <StarIcon className="h-4 w-4 " />
                            <span>originals</span>
                        </a>
                        <a className='headerLinkes'>
                            <FilmIcon className="h-4 w-4 " />
                            <span>Movies</span>
                        </a>
                        <a className='headerLinkes'>
                            <BuildingStorefrontIcon className="h-4 w-4 " />
                            <span>series</span>
                        </a>
                    </div>
                }
                {user.isLoggedin ?
                    <div className='relative || isLoggedin ||  py-3 cursor-pointer'>
                        <Image src={user.img} className="w-9 h-9 rounded-full" alt="Profile-Img" height={1000} width={1000} />
                        <button className={`${style.headerBtn} absolute top-[100%] `} onClick={logoutsend}>Logout</button>
                    </div>
                    :
                    <button className={style.headerBtn} onClick={singGoogle}>Login</button>
                }
            </div>
        </div>
    );
});

export default Header;