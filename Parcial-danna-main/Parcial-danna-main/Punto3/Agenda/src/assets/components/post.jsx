

import React, { useState } from 'react';
import { crearContacto } from "./api"; 


const Post = () => {
    const [names, setNames] = useState('');
    const [telephone, setTelephone] = useState('');
    const [image, setImage] = useState('');

    const subir = async (e) => {
        e.preventDefault();

        try {
            await crearContacto(names, telephone, image);
           // console.log('Contacto creado exitosamente');
            
        } catch (error) {
            console.error('Error al crear contacto:', error);
        }
    };
    
    return (
        <div className="post-container">
            <div className="form-container">
                <h2 className="form-title">Nuevo Contacto</h2>
                <form onSubmit={subir}>
                    <input type="text" value={names} onChange={(e) => setNames(e.target.value)} placeholder="Nombres" className="form-input" />
                    <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Teléfono" className="form-input" />
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Imagen" className="form-input" />
                    <button type="submit" className="form-button">Guardar Contacto</button>
                </form>
            </div>
            <div className="contacts-container">
                <h2>Contactos</h2>
               
            </div>
        </div>
    );
};

export default Post;
