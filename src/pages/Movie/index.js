import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import './style.css';

import Genre from '../../components/Genre';
import Production from '../../components/Production';

export default function Movie(){

    const { id } = useParams();
    const navigation = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovie(){
            try{
                const res = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: '6ad5e921680b9aa857c6fd1323650df7',
                        language: 'pt-BR',
                    }
                })

                setMovie(res.data);
                setLoading(false);
            }catch(err){
                console.log("Filme não encontrado");
                navigation("/", { replace: true });
                return;
            }
            
        }

        loadMovie();

        // return() => {
        //     console.log("Componente desmontado")
        // }
    }, [navigation, id])

    if(loading){
        return(
            <div className='loading-movie-detail'>
                <div className='loading-movie-detail-group'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return(
        <div className='movie-detail-container'>
            <div className='movie-detail-container-group'>
                <div className='movie-detail-container-group-left'>
                    <div className='movie-detail-container-image'>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    </div>
                    <div className='movie-detail-container-group-btn-trailer'>
                        <a target="blank" href={`https://youtube.com.br/results?search_query=${movie.title} Trailer`}><i className="fa-solid fa-clapperboard"></i> Ver Trailer</a>
                    </div>
                </div>
                
                <div className='movie-detail-container-info'>
                    <div className='info-title'>{movie.title}</div>
                    <div className='info-genres'>
                        {
                            movie.genres.map(genre => {
                                return(
                                    <Genre key={genre.id} genre={genre.name} />
                                )
                            })
                        }
                    </div>
                    <div className='info-details'>
                        <div><i className="fa-solid fa-clock"></i> {movie.runtime}min</div>
                        <div><i className="fa-solid fa-dollar-sign"></i> {movie.revenue}</div>
                    </div>
                    <div
                     className='info-overview'>{ movie.overview }</div>
                     <div className='info-production'>
                        <div className='info-production-title'>Produção</div>
                        <div className='info-production-items'>
                        {
                            movie.production_companies.map(company => {
                                return(
                                    <Production key={company.id} company={company} />
                                )
                            })
                        }
                        </div>
                        
                     </div>
                </div>
            </div>
            
        </div>
    )
}