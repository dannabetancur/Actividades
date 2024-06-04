
import axios from 'axios';


export const crearContacto = async (names, telephone, image) => {
    try {
        const response = await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', { names, telephone, image });
        return response.data;
    } catch (error) {
        console.error('Error al crear contacto:', error);
        throw error; 
    }
};
