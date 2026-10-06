import TarjetaProyecto from "./TarjetaProyecto";

type Proyecto = {
  nombre: string;
  descripcion: string;
  enlaceRepo?: string;
};

type ListaProyectosProps = {
  proyectos: Proyecto[];
};

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  return (
    <section>
      <h2>Proyectos</h2>

      <div className="proyectos">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.nombre}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlaceRepo}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaProyectos;
