type PresentacionProps = {
  nombre: string;
  descripcion: string;
};

function Presentacion({ nombre, descripcion }: PresentacionProps) {
  return (
    <section className="presentacion">
      <p className="saludo">Hola, soy</p>

      <h1>{nombre}</h1>

      <p>{descripcion}</p>
    </section>
  );
}

export default Presentacion;
