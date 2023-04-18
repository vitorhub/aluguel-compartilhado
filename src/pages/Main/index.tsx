import { Link } from 'react-router-dom'

export default function Main() {



    return (
        <>
            <h1>Sobre</h1>
            <p>Unimos pessoas a fim de propiciar o compartilhamento de imóveis por meio de locação de forma colaborativa e transparente.</p>
            <Link to="/login"> <button>Entrar</button> </Link>
            <Link to='/cadastrar'> <button>Cadastrar</button> </Link>
            <Link to="/about">voltar</Link>
        </>
    )
}