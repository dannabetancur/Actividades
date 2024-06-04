import '../sass/Boton.scss'

const Boton =({icon, handleClick}) =>{
    return (
        <>
        <div className='caja_boton'>
            <button className="Boton" 
                onClick={handleClick}
            >{icon}</button>
            <div className="Boton_sombreado"></div>
        </div>
        </>
    )
}

export {Boton};