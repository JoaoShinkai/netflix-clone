import { useEffect, useState } from 'react';
import Film from '../../components/Film';
import Main from '../../components/Main';
import { api } from '../../services/api';
import './style.css';

export default function Home(){

    const [filmes, setFilmes] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: '6ad5e921680b9aa857c6fd1323650df7',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0,10));
        }

        async function loadPopularMovies(){
            const response = await api.get("/movie/popular", {
                params: {
                    api_key: '6ad5e921680b9aa857c6fd1323650df7',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setPopularMovies(response.data.results.slice(0,10));

        }

        async function loadTopRated(){
            const response = await api.get("/movie/top_rated", {
                params: {
                    api_key: '6ad5e921680b9aa857c6fd1323650df7',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setTopRated(response.data.results.slice(0, 10));
        }

        async function loadUpcoming(){
            const response = await api.get("/movie/upcoming", {
                params: {
                    api_key: '6ad5e921680b9aa857c6fd1323650df7',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setUpcoming(response.data.results.slice(0, 10));
        }

        function GenerateRandomNumber(list){
            const n = Math.floor(Math.random() * 10);
            setRandomNumber(n);
        }

        loadFilmes()
        loadPopularMovies()
        loadTopRated()
        loadUpcoming()
        GenerateRandomNumber()

    }, [])

    

    return(
        <div className='container'>
            <div className='main'>
                {
                    filmes[0] && filmes[randomNumber] &&
                    <Main movie={filmes[randomNumber]} />
                }
                
            </div>
            <div className='group-films'>
                <div className='group-films-title'>Em cartaz</div>
                <div className='group-films-cards'>
                    {filmes.map(filme => {
                        return(
                            <Film key={filme.id} film={filme}></Film>
                        )
                    })}
                </div>
            </div>
            <div className='group-films'>
                <div className='group-films-title'>Mais populares</div>
                <div className='group-films-cards'>
                    {popularMovies.map(filme => {
                        return(
                            <Film key={filme.id} film={filme}></Film>
                        )
                    })}
                </div>
            </div>
            <div className='group-films'>
                <div className='group-films-title'>Bem avaliados</div>
                <div className='group-films-cards'>
                    {topRated.map(filme => {
                        return(
                            <Film key={filme.id} film={filme}></Film>
                        )
                    })}
                </div>
            </div>
            <div className='group-films'>
                <div className='group-films-title'>Em breve</div>
                <div className='group-films-cards'>
                    {upcoming.map(filme => {
                        return(
                            <Film key={filme.id} film={filme}></Film>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}