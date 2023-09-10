function Form () {
    function cadastrarUsuario(event) {
        event.preventDefault();
        console.log('cadastrou');
    }

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Nome" />
                </div>
                <div>
                    <input type='submit' value='cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form;