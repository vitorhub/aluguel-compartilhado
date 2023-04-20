import { Link } from 'react-router-dom'
import logo from '../../assets/share-rent.png'
import { useState } from 'react'

export default function Main() {
    const [cadastrar, setCadastrar ] = useState(false)
    const [ entrar, setEntrar ] = useState(false)

    function AbreCadastrar(){
        setCadastrar (!cadastrar)
        setEntrar(false)
    }
    function AbreEntrar(){
        setEntrar(!entrar)
        setCadastrar(false)
    }

    function BuscaCad() {
        fetch(`http://localhost:3000/cad`) // para fetch
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err))
      }
      

    return (
        <>
            <nav className="menu">
                <img src={logo} alt="logo" className='logo' />
            </nav>
            <h1>Sobre</h1>
            <p>Unimos pessoas a fim de propiciar o compartilhamento de imóveis por meio de locação de forma transparente.</p>
            {/* <Link to="/login"> <button>Entrar</button> </Link> */}
            <button onClick={ AbreEntrar }>Entrar</button>
            {entrar ? (<form action="http://localhost:3000/cad" method='POST'>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" /> <br />
                <label htmlFor="senha">senha</label>
                <input type="password" name="senha" id="senha" />
                <input type="submit" value="Submit" />
            </form>): ""}
            {/* <Link to='/cadastrar'> <button>Cadastrar</button> </Link> */}

            <button onClick={ AbreCadastrar }>Cadastrar</button>
            {/* <Link to="/about">voltar</Link> */}
            {cadastrar ? (<form action="/">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
            <input type="submit" value="Submit" />
            </form>): ""}
            <button onClick={BuscaCad}>busca</button>
        </>
    )
}