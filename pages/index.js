import Head from "next/head";
import { useSelector } from "react-redux";
import Brands from "../components/Brands/Brands";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import TopMovie from "../components/TopMovie/TopMovie";
export default function Home({
  popular,
  topRated,
  last,
  tvTop,
  popularTv,
  onTheAir,
}) {
  const user = useSelector((ele) => ele.auth);
  return (
    <>
      <Head>
        <title>Disney+</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {user.isLoggedin ? (
          <main className="bg-home || bg-center || bg-cover bg-no-repeat || bg-fixed">
            <Slider />
            <Brands />
            <TopMovie popular={popular} title="Popular Movie" type="movie"/>
            <TopMovie popular={topRated} title="Top Rated Movie" type="movie"/>
            <TopMovie popular={last} title="Now Playing Movie" type="movie"/>
            <TopMovie popular={popularTv} title="Tv Top Popular" type="tv"/>
            <TopMovie popular={tvTop} title="Tv Top Rated " type="tv"/>
            <TopMovie popular={onTheAir} title="Tv On The Air "type="tv"/>
          </main>
        ) : (
          <Hero />
        )}
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const [
    popularRes,
    topRatedRes,
    lastRes,
    tvTopRes,
    popularTvRes,
    onTheAirRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=c343a7ad70f3eb4b7594802650cdd546&language=en-US&page=1`
    ),
  ]);
  const [popular, topRated, last, tvTop, popularTv, onTheAir] =
    await Promise.all([
      popularRes.json(),
      topRatedRes.json(),
      lastRes.json(),
      tvTopRes.json(),
      popularTvRes.json(),
      onTheAirRes.json(),
    ]);

  return {
    props: {
      popular: popular.results,
      topRated: topRated.results,
      last: last.results.reverse(),
      tvTop: tvTop.results,
      popularTv: popularTv.results,
      onTheAir: onTheAir.results.reverse(),
    },
  };
}
