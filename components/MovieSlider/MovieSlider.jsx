import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const sytle = {
    containerImg: `relative || min-w-[250px] || min-h-[350px] || cursor-pointer || border-[3px]
    || border-white || border-opacity-10 || hover:border-opacity-100 || shadow-xl || select-none
    || rounded-lg || overflow-hidden || mr-6  || hover:shadow-2xl  || hover:scale-105  || movieSlider`
}
const MovieSlider = ({ movie, type }) => {
    const rounter = useRouter()
    const IMG_URL = `https://image.tmdb.org/t/p/original`
    return (
        <div className={sytle.containerImg} >
            <Link href={`/${type}/${movie.id}`}>
                <div className="flex || items-center || justify-center ||  min-h-[350px] || loadingImg">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                <Image layout='fill' sizes='100%,100%' objectFit='cover' loading='eager' onLoad={(e) => {
                    e.target.parentElement.querySelector(".loadingImg").remove()
                    e.target.style.opacity = "1"
                }} className='opacity-0' src={`${IMG_URL}${movie.poster_path}` || `${movie.poster_path}` || `${IMG_URL}${movie.backdrop_path}`} alt={"Poster"} />
            </Link>
        </div>
    );
};

export default MovieSlider;