
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css"; 

const App = () => {
    const [datos, setDatos] = useState([]);
    const [names, setNames] = useState('');
    const [telephone, setTelephone] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        obtenerDatos();
    }, []); 

    const obtenerDatos = async () => {
        try {
            const respuesta = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
            setDatos(respuesta.data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    const subir = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project", { names, telephone, image });
            console.log('Contacto creado exitosamente');
            setNames('');
            setTelephone('');
            setImage('');
            obtenerDatos(); 
        } catch (error) {
            console.error('Error al crear contacto:', error);
        }
    };

    return (
        
        <div className="container">
            
            <div className="form-container">
                <h2 className="form-title">Nuevo Contacto</h2>
                <form onSubmit={subir}>
                    <input type="text" value={names} onChange={(e) => setNames(e.target.value)} placeholder="Nombres" className="form-input" />
                    <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Teléfono" className="form-input" />
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Url de la imagen" className="form-input" />
                    <button type="submit" className="form-button">Guardar Contacto</button>
                </form>
            </div>
            
            <div className="contacts-container">
                {datos.map((contacto) => (
                    <div key={contacto.identify} className="contact">
                        <p className="contact-name">{contacto.names}</p>
                        <p>{contacto.telephone}</p>
                        {contacto.image && <img src={contacto.image} alt="Imagen de contacto" className="contact-image" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
