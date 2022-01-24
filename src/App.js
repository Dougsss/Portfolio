import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Galeria from './componentes/Galeria';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const nomeEmpresa= 'Doug Araujo';

  return (
    <>
    <Header empresa={nomeEmpresa}/>
    <main>
      <Banner>
        <img src="https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.18169-9/26993287_1541294869256955_325696431087209341_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHsGvmiofz-jFfT_TaQNARMm0SDxDrhW9ubRIPEOuFb2-h0nHVqPps3eekLPrjCa8FKni3qcYvJ90uizMtN08Dr&_nc_ohc=wmtF6RwdTCMAX_wgY89&_nc_ht=scontent.fbfh1-2.fna&oh=af9db09a2daef68ab4b749ecba39093f&oe=61B9E542" alt="perfil" />
        <h2>Olá, eu sou o Doug!</h2>
          <br />
          <p>
            Estudante de Desenvolvimento Web Full Stack na Digital House.
            Atualmente, autônomo em Manutenções e venda de Smartphones ajudando 
            as pessoas a estarem mais conectadas as tecnologias que nos cercam.
          </p>
      </Banner>
      <Galeria />
    </main>
    <Footer empresa={nomeEmpresa}/>
    </>
  );
}

export default App;
