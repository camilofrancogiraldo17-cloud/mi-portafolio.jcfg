import Presentacion from "./componentes/Presentacion";
import ListaTecnologias from "./componentes/ListaTecnologias";
import ListaProyectos from "./componentes/ListaProyectos";

const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
];

const proyectos = [
  {
    id: 1,
    nombre: "Fila creativa",
    descripcion:
      "Proyecto realizado en el Taller de modelado y React del módulo 03. En este proyecto aprendí a trabajar con interfaces y componentes de React.",
    enlaceRepo: "https://github.com/camilofrancogiraldo17-cloud/mi-portafolio.jcfg",
  },
];

function App() {
  return (
    <>
      <header className="encabezado">
        <nav>
          <a href="#inicio">Mi portafolio</a>

          <div className="navegacion">
            <a href="#tecnologias">Tecnologías</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        <div id="inicio">
          <Presentacion
            nombre="Jhon Camilo Franco Giraldo"
            descripcion="Estoy aprendiendo desarrollo web y me interesa crear interfaces claras, funcionales y fáciles de usar."
          />
        </div>

        <div id="tecnologias">
          <ListaTecnologias tecnologias={tecnologias} />
        </div>

        <div id="proyectos">
          <ListaProyectos proyectos={proyectos} />
        </div>

        <section id="contacto" className="contacto">
          <h2>Contacto</h2>

          <p>
            Si quieres conocer más sobre mi trabajo, puedes escribirme:
          </p>

          <a href="mailto:camilofrancogiraldo1948@gmail.com">
  camilofrancogiraldo1948@gmail.com
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Jhon Camilo Franco Giraldo. Portafolio personal.</p>
      </footer>
    </>
  );
}

export default App;
