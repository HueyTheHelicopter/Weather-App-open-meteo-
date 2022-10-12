import axios from 'axios';

export default class PostService { 

    static async temperature_2m() {
        try {
            let request = "https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,surface_pressure,relativehumidity_2m&current_weather=true&past_days=7"
            const response = await axios.get(request)
            return response;
        } catch (e) {
            alert('Message: ' + e.message +'\nReason: ' + e.response.data.reason)
        }
        
    }
}