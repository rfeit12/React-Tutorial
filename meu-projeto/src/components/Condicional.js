import { useState } from 'react';

function Condicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(event) {
        event.preventDefault();
        setUserEmail(email)
    }

    function limparEmail(event) {
        event.preventDefault();
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail" onChange={(event) => setEmail(event.target.value)}/>
            </form>

            <button type="submit" onClick={enviarEmail}>Enviar Email</button>
            {userEmail && (
                <div>
                    <p>O seu e-mail é: {userEmail}</p>
                    <p>Seu e-mail foi cadastrado com sucesso!</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>    
            )}

        </div>
    )
}

export default Condicional;