import home from './home.module.css';
import contato from '../Contato/contato';
import produtos from '../Produtos/produto'
function Home() {
    return (
        <div className={home.container}>
            <header className={home.header}>
                <h1>SURICATEAM</h1>
            </header>

            <main className={home.main}>
                <p className={home.subtitulo}>
                    Bem-vindo à SURICATEAM! Seu site de jogos FPS favorito.
                </p>
                <hr className={home.linha} />
                <p className={home.descricao}>
                    Aqui você encontrará variedades de jogos FPS
                </p>
                
                <div className={home.botao}>
                    <button className={home.botaojogos}>JOGOS</button>
                    <button className={home.botaocontato}>CONTATO</button>
                </div>
            </main>


        </div>
    );
}

export default Home;