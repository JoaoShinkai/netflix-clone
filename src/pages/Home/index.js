import { useEffect, useState } from 'react';
import Film from '../../components/Film';
import Main from '../../components/Main';
import { api } from '../../services/api';
import './style.css';

export default function Home(){

    const [filmes, setFilmes] = useState([]);
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

        function GenerateRandomNumber(list){
            const n = Math.floor(Math.random() * 10);
            setRandomNumber(n);
        }

        loadFilmes()
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
                <div className='group-films-title'>Em cartaz</div>
                <div className='group-films-cards'>
                    {filmes.map(filme => {
                        return(
                            <Film key={filme.id} film={filme}></Film>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}