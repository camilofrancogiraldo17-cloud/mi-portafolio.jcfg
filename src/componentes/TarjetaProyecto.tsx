type TarjetaProyectoProps = {
  nombre: string
  descripcion: string
  enlace?: string
}

function TarjetaProyecto({
  nombre,
  descripcion,
  enlace,
}: TarjetaProyectoProps) {
  if (!enlace) {
    return (
      <article className="tarjeta-proyecto">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
      </article>
    )
  }

  return (
    <a
      className="tarjeta-proyecto"
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </a>
  )
}

export default TarjetaProyecto
