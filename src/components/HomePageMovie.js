import axios from "axios";
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

// const HomePageMovie = ({id, title, overview, img, average, releaseDate}) => {
//     const movieApiKey = "667564e273e374e6294f8e7794ae8062";
//     const tokenKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1NjRlMjczZTM3NGU2Mjk0ZjhlNzc5NGFlODA2MiIsIm5iZiI6MTcxOTM5MDczMC4xMzg5MDIsInN1YiI6IjY2N2JkMTBjMzIyZmFmOThmN2JhZjYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jXc-mMqsnmAbR77PQA_xykkgO8YKPMoWiwjpNjvp1NI";

//     const [trailerId, setTrailerId] = useState(null);
//     const [error, setError] = useState(null);

//     const trailerRes = async () => {
//         const language = "ko-KR";
//         try {
//             // 상태 초기화
//             setError(null);

//             const json = await axios({ // 영화 기본정보세팅
//                 headers: {
//                     accept: "application/json",
//                     Authorization: `Bearer ${tokenKey}`
//                 },
//                 baseURL: `https://api.themoviedb.org/3/movie/${id}/videos?`,
//                 method: 'get',
//                 params: {
//                     api_key: movieApiKey,
//                     language: language,

//                 },
//                 proxy: {
//                     port: 3000
//                 }
//             });
//             setTrailerId(json.data.results[0].key);
//             console.log(json.data.results[0].key)


//         } catch (e) {
//             setError(e);
//         }

//     };  

//     useEffect(()=>{
//         trailerRes();
//     },[])
    
//     // <Link to={`${process.env.PUBLIC_URL}/Trailer/${id}`}>
    
    
    
//     return (
//         <div>
//             <h1>JunPlix</h1>
//             <h3>{title}</h3>
//             <Link to={`https://www.youtube.com/watch?v=${trailerId}`}>        
//                 <img src={`https://image.tmdb.org/t/p/w200/${img}`}></img>
//                 </Link>        
//             <p>출시일 : {releaseDate}</p>
//             <p>평점 : {average}</p>
//             <p>상세설명 : {overview ? overview : "준비중 입니다."}</p>
//         </div>
//     )
// }

const HomePageMovie = ()=>{
    retuern (
        <div>wow</div>
    )
}

export default HomePageMovie;