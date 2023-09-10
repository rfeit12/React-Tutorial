import { useState } from 'react';

function Form () {
    function cadastrarUsuario(event) {
        event.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor='name'>Nome:</label> 
                    <input
                        type="text"
                        id='name'
                        name='name'
                        placeholder="Digite o seu nome"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        placeholder="Digite a sua senha"
                        onChange = {(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <input type='submit' value='cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form;