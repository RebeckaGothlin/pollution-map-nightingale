import axios from "axios";
import { IOpenAQResponse } from "../models/IOpenAQResponse";

const BASE_URL = `https://api.openaq.org/v3/parameters/2/latest?limit=10`;

const apiKey = import.meta.env.VITE_API_KEY;

export const getPollutionData = async (): Promise<IOpenAQResponse> => {
    console.log("API Key:", import.meta.env.VITE_API_KEY);

    try {
        const response = await axios.get(`${BASE_URL}`, {
            headers: {
                'x-api-key': apiKey,
            }
        })
        console.log("API Key:", apiKey);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.message); // Logga meddelande
            console.error("Response data:", error.response?.data); // Logga API-svaret om det finns
            console.error("Status code:", error.response?.status); // Logga statuskod
        } else {
            console.error("Fel vid hämtning av data:", error);
            
        }
        throw error;
    }

    
}


// import axios from 'axios';
// const fetchQuotes = async () => {
// 	const res = await axios.get(
// 		`https://famous-quotes4.p.rapidapi.com/random`,
// 		{
// 			headers: {
// 				'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
// 				'x-rapidapi-key': API_KEY
// 			}
// 		}
// 	);
// 	return res.data;
// };
