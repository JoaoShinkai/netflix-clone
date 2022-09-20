import './style.css'

export default function Main(props){

    // console.log(props.movie)

    return(
        <div className='movie-main'>
            <img src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt="" className='movie-main-background'/>
            <div className='movie-main-container'>

            </div>
            <div className='smoothie'></div>
        </div>
    )
}