import React, {useEffect, useState} from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";


function CadFilme (){
    const [name, setName] = useState("");
    const [gender, setGender] = useState ("");
    const [favorito, setFavorito] = useState ("");
    const [image_url, setImage_url] = useState ("");
    const [message, setMessage] = useState ("");

    let handleSubimit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch ("http//localhost:3000/filmes", {
                method: "POST",
                headers: {
                    'Conect-Type': 'application/json'
                },
                body: JSON.stringify({name,gender,favorito,image_url})
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName("");
                setGender("");
                setFavorito("");
                setImage_url("");
                setMessage("User crated successfully")
            } else {
                setMessage("Some error occured");
            }
        }catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <Banner imagem={favorito} />
            <Titulo>
                <h1>Cadastrar Filmes</h1>
            </Titulo>
            <section className="formulario">

                <form onSubmit={handleSubimit}>
                    <div className="campo-texto">
                        <input
                            type="text"
                            value={name}
                            placeholder="Inserir nome"
                            onChange={(e) => setName(e.target.value)}/>

                            <input
                            type="text"
                            value={gender}
                            placeholder="Inserir genero"
                            onChange={(e) => setGender(e.target.value)}/> 

                            <input
                            type="text"
                            value={image_url}
                            placeholder="Inserir url da imagem"
                            onChange={(e) => setImage_url(e.target.value)}/>

                            <button className="botao" type="submit">
                                Inserir Filme
                            </button>

                            <div className="message">{message ? <p>{message}</p> : null}</div>
                    </div>
                </form>
            </section>
        
        {/* <Formulario aoFilmeCadastro={filme => aoNovoFilmeAdicionado(filme)}/> */}
        </>
    )
}
export default CadFilme; 