import { Link } from 'react-router-dom'

export default function Form() {
    return (
        <>
            <form action="">
                <label htmlFor="availableValue">Valor disponível</label>
                <input type="number" name="availableValue" /> <br />

                <label htmlFor="region">Escolha região</label>
                <input type="text" name="region" id="region" placeholder='Cidade Estado Bairro'/> <br />

                <label htmlFor="npeople">Com quantas pessoas divide o aluguel</label>
                <input type="number" name="npeople" id="npeople" /> <br />

                <label htmlFor="moradia">Preferência de moradia</label>
                <input type="text" name="moradia" id="moradia" placeholder='Casa Apto etc' /> <br />

                <label htmlFor="temcarro">Tem veiculo</label>
                <input type="checkbox" name="temcarro" id="temcarro" /> <br />
                <label htmlFor="temmobilia">Tem mobilia</label>
                <input type="checkbox" name="temmobilia" id="temmobilia" /> <br />

                <label htmlFor="apresentacao">Apresente-se</label> <br />
                <textarea name="apresentacao" id="apresentacao" cols={30} rows={10}>
                    Informe se tem pet, que mobílias já tem, informações que facilitem para a outra pessoa
                </textarea>

            </form>
            
            <Link to="/"> <button> volta raiz </button> </Link>
        </>
    )
}