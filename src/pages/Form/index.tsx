import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Form() {

    const [estado, setEstado] = useState([])
    const [data, setData] = useState([])

    // fetch(`https://viacep.com.br/ws/${e}/json/`) // para fetch
    function getDistritos(e: any) {
        e.preventDefault();
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
            .then((response) => response.json())
            .then((data) => { console.log(data); setData(data) })
            .catch((err) => console.log(err))
    }
    function getEstados(e: any) {
        setEstado(e)
        console.log(e)
    }
    function percorreData() {

    }

    return (
        <>
            <form action="">
                <label htmlFor="availableValue">Valor disponível</label>
                <input type="number" name="availableValue" /> <br />

                <label htmlFor="estado">Escolha Estado</label>
                <select name="estado" id="estado" onChange={(e) => getEstados(e.target.value)}>
                    {<option value={"RS"}>{"RS"} </option>}
                    {<option value={"SP"}>{"SP"} </option>}
                    {<option value={"RJ"}>{"RJ"} </option>}
                </select>
                <select name="municipio" id="municipio" /* onChange={(e) => getEstados(e.target.value)} */ >
                    {data.length > 0 ?
                        data.map( (x: any,y) => <option key={y}>{ x.nome  }</option> )
                        // <option value={"uva"}>{"uva"}</option>
                        : <option value={"pera"}>{"pera"}</option>}
                </select>


                <button onClick={getDistritos} > getDistritos </button> <br />

                <label htmlFor="npeople">Com quantas pessoas divide o aluguel</label>
                <input type="number" name="npeople" id="npeople" /> <br />

                <label htmlFor="moradia">Preferência de moradia</label>
                <input type="text" name="moradia" id="moradia" placeholder='Casa Apto etc' /> <br />

                <label htmlFor="temcarro">Tem veiculo</label>
                <input type="checkbox" name="temcarro" id="temcarro" /> <br />
                <label htmlFor="temmobilia">Tem mobilia</label>
                <input type="checkbox" name="temmobilia" id="temmobilia" /> <br />

                <label htmlFor="apresentacao">Apresente-se</label> <br />
                <textarea name="apresentacao" id="apresentacao" cols={30} rows={10}
                    defaultValue={'Informe se tem pet, que mobílias já tem, informações que facilitem para a outra pessoa'}
                />

            </form>

            <Link to="/"> <button> volta raiz </button> </Link>
        </>
    )
}