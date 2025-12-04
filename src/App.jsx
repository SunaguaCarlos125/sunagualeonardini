import './App.css'
import Carta from './Carta.jsx';
import Modales from './Modales.jsx';
import Principal from './Principal.jsx'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
function App() {
  return (
    <div className="padre">
        <div className="titulo"><h3>Centro de salud Patitito</h3></div>
        <div className="menu">
          <nav className="navbar navbar-expand-lg bg-nav-red">
                  <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav"  >
                        
                        <li className="nav-item">
                          <Link className="nav-link" to="/sunagualeonardini/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/sunagualeonardini/modal">Modales</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/sunagualeonardini/carta">Cartas</Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
            </nav>
        </div>
        <div className="carrera">
          <img src="./nasa.jpg" alt="" />
          <h5>Informatica</h5>
          <h6>Web 2</h6>

        </div>


        


        <div className="contenido">
          <Routes>
            <Route path="/sunagualeonardini/" element={<Principal/>} />
            <Route path="/sunagualeonardini/modal" element={<Modales/>} />
            <Route path="/sunagualeonardini/carta" element={<Carta imagen1="perro.jpg" imagen2="perros.jpg" titulo1="docto1" titulo2="docto2" descripcion1="info perro1" descripcion2="info perro2" />} />

          </Routes>


        </div>





        <div className="redes">
          <h3>Siguenos en:</h3>
          <ul>
            <li><a href="https://www.facebook.com/"> Facebook</a></li>
            <li><a href="https://www.instagram.com/informatica_umsa/">Instagram</a></li>
            <li><a href="https://www.bing.com/search?q=twiter%20informatica%20umsa&qs=n&form=QBRE&sp=-1&lq=0&pq=twiterinformatica%20umsa&sc=10-22&sk=&cvid=B5220450C25A4618B8AF51D324548200">X</a></li>
          </ul>
        </div>
        <div className="pie">
          <h3>Suñagua Leonardini Carlos Enrique - 2025</h3>
        </div>
    </div>
  );
}

export default App;
