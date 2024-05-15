import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/dashboardPage/Content";
import { usePublication } from "../../shared/usePublication";
import { LoadSpinner } from "../../components/LoadSpinner";
import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import "../../pages/homepage.css"; // Importa tu archivo de estilos CSS

export const HomePage = () => {
    const { getPosts, allPosts, isFetching } = usePublication();
    const location = useLocation();
  
    useEffect(() => {
      getPosts();
    }, []);
  
    if (isFetching) {
      return <LoadSpinner />;
    }
  
    const showBanner = location.pathname === "/";
  
    return (
      <>
        <div>
          <Navbar />
          {showBanner && (
            <header className="banner-container"> {/* Aplica la clase al contenedor del encabezado */}
              <div className="content-container"> {/* Aplica la clase al contenedor del contenido */}
                <h1>Bienvenido a este blog</h1>
                <p className="contenido">Este proyecto lo que busca es el poder 
                    publicar cualquier cosa que se te ocurra, pero la principal
                    idea es publicar todo lo relacionado con los proyectos que hemos
                    realizado durante este bimestre y el anterior, en este blog vas a poder
                    comentar sin necesidad de estar logeado, por favor se respetuoso para que
                    tengamos una mejor cordialidad<br></br><br></br>
                    Puedes crear una publicacion en CREAR PUBLICACION y en Ver Posts podras
                    ver los posts que publicaste, asi mismo puedes realizar un comentario al mismo
                    unicamente poniendo quien es el autor
                    <br></br><br></br>
                    Puedes ver todos mis proyectos en el footer en donde dice Links ahi 
                    podras encontrar los proyectos de las tres materias.
                    <br></br><br></br>
                    <center>DISFRUTA EL BLOG!!!</center>
                </p>
              </div>
            </header>
          )}
          <Content posts={allPosts} getPosts={getPosts} />
        </div>
        {showBanner && <Footer />} {/* Renderiza el footer solo si está en la página de inicio */}
      </>
    );
  };