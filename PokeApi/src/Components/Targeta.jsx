import '../sass/Targeta.scss'
const Targeta = ({name, img}) => {
  return (
    <div className="targeta">
      <p className="targeta_nombre">{name}</p>
      <div className="targeta_fondo"></div>
      <img className="targeta_pokemon" src={img} alt="pokemon img"></img>
    </div>
  )
}

export {Targeta}
