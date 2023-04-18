import { Link } from 'react-router-dom'
import MenuAbout from './MenuAbout'

export default function About(){
    return(
        <>
            <MenuAbout/>
            <Link to="/"> <button> volta raiz </button> </Link>
        </>
    )
}