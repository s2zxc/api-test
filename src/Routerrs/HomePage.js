import axios from "axios"
import { useEffect, useState } from "react";
import HomePageMovie from "../components/HomePageMovie";
import Loading from "../components/Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let data = [];

const HomePage = () => {
    const movieApiKey = "667564e273e374e6294f8e7794ae8062";
    const tokenKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1NjRlMjczZTM3NGU2Mjk0ZjhlNzc5NGFlODA2MiIsIm5iZiI6MTcxOTM5MDczMC4xMzg5MDIsInN1YiI6IjY2N2JkMTBjMzIyZmFmOThmN2JhZjYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jXc-mMqsnmAbR77PQA_xykkgO8YKPMoWiwjpNjvp1NI";

    const [movieList, setMovieList] = useState([]);
    const [curDate, setCurDate] = useState(new Date);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    const fetchMovie = async () => {
        const language = "ko-KR";
        try {
            // 상태 초기화
            setError(null);
            setMovieList([]);
            setLoading(true);

            const movieRes = await axios({ // 영화 기본정보세팅
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${tokenKey}`
                },
                baseURL: `https://api.themoviedb.org/3/discover/movie?`,
                method: 'get',
                params: {
                    api_key: movieApiKey,
                    include_adult: true,
                    include_video: true,
                    language: language,
                    primary_release_year: curDate

                },
                proxy: {
                    port: 3000
                }
            });
            setMovieList(movieRes.data.results);
            console.log(movieRes.data.results)
            console.log(movieRes);


        } catch (e) {
            setError(e);
        }
        setLoading(false);

    };



    useEffect(() => {
        fetchMovie();
    }, [])

    return (
        <div>
            {
                loading ? <Loading /> :
                    <div>
                        <h1>최신영화</h1>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {movieList.map((e) => {
                                    return (
                                        <div>
                                            {<HomePageMovie
                                                id={e.id} // 영화 id값 추후 트레일러 불러올때 사용예정
                                                key={e.id}
                                                title={e.title} // 제목
                                                overview={e.overview} // 상세설명
                                                img={e.poster_path} // 포스터 이미지
                                                average={e.vote_average} // 평점
                                                releaseDate={e.release_date} // 상영일
                                            />}
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
            }
        </div>

    )
}

export default HomePage;

