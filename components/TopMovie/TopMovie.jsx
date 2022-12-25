import MovieSlider from '../MovieSlider/MovieSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const TopMovie = ({ popular, title ,type}) => {
    const settings = {
        speed: 300,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: false,
        variableWidth: true,
        dots: true,
        rows: 1,
    };
    return (
        <div className='container mx-auto pb-10'>
            <h2 className='px-[10px] || text-2xl || font-semibold'>{title}</h2>
            <Slider {...settings}>
                {popular && popular.map(movie =>
                    <MovieSlider key={movie.id} movie={movie} type={type}/>
                )}
            </Slider>
        </div>
    );
};

export default TopMovie;