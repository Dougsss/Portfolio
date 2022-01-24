import Projeto from '../Projetos';
import './style.css';

const Galeria = ()=>{
    return(
        <section id= "galeria">
            <h1>Alguns de meus Projetos realizados!</h1>
            <div className="grid">
                <Projeto url="https://front2-delta.vercel.app/" title="Bloco de Anotações foi o Projeto final do Check Point da matéria de Front2" />
                <Projeto url="https://pod-castream.vercel.app/" title="Site de PodCasts foi o Projeto final realizado em equipe do Check Point da matéria de Front1"/>
                <Projeto url="https://pacman.com/en/" title="O melhor Game já feito! Um projeto aleatório para completar os requisitos!" />
            </div>
        </section>
    )
}

export default Galeria