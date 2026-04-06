import './produto.css';

const Produtos = () => {
    return (
        <div className="page">
            <header className="header">
                <h1>Catálogo dos Jogos</h1>
                <p>Explore os melhores FPS para o seu setup.</p>
            </header>

            <section className="grid">
                <div className="card">
                    <div className="categoria">Tático</div>
                    <h2>Valorant</h2>
                    <p className="preco">Grátis</p>
                </div>

                <div className="card">
                    <div className="produto-badge">Competitivo</div>
                    <h2>Counter-Strike 2</h2>
                    <p className="preco">Grátis</p>
                </div>

                <div className="card">
                    <div className="categoria">Ação/Warzone</div>
                    <h2>Call of Duty</h2>
                    <p className="preco">R$ 299,90</p>
                </div>

                <div className="card">
                    <div className="categoria">Hero Shooter</div>
                    <h2>Overwatch 2</h2>
                    <p className="preco">Grátis</p>
                </div>

                <div className="card">
                    <div className="categoria">Clássico</div>
                    <h2>Delta Force</h2>
                    <p className="preco">R$ 10,00</p>
                </div>

                <div className="card">
                    <div className="categoria">Tático</div>
                    <h2>Rainbow Six Siege</h2>
                    <p className="preco">R$ 149,90</p>
                </div>
            </section>
        </div>
    );
};

export default Produtos;