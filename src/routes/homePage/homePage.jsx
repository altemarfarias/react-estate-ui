import SearchBar from "../../components/searchBar/SearchBar";
import './homePage.scss';

function HomePage() {
     return <div className="homePage">
          <div className="textContainer">
               <div className="wrapper">
                    <h1 className="title">
                         Encontre imóveis e obtenha o Lugar dos seus sonhos
                    </h1>     
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, 
                    quis nostrum exercitationem ullam corporis suscipit laboriosam
                    </p>
                    <SearchBar />
                    <div className="boxes">
                         <div className="box">
                              <h1>16+</h1>
                              <h2>Anos de Experiência</h2>
                         </div>
                         <div className="box">
                              <h1>200</h1>
                              <h2>Prêmios Ganhos</h2>
                         </div>
                         <div className="box">
                              <h1>2000</h1>
                              <h2>Imóveis Prontos</h2>
                         </div>
                    </div>
               </div>
          </div>
          <div className="imgContainer">
               <img src="bg.png" alt=""/>
          </div>
     </div>
}

export default HomePage;