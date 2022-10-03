import './style.css'

export default function Production(props){
    return(
        <div className='production'>
            <div className='production-image'>
                <img src={`https://image.tmdb.org/t/p/original/${props.company.logo_path}`} alt="" />
            </div>
            {/* <div>{props.company.name}</div> */}
        </div>
    )
}