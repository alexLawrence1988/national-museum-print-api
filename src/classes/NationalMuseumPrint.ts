import { AxiosInstance, AxiosResponse } from 'axios';
import { Print } from '../global/types';

export default class NationalMuseumPrint {

    apiKey: string;
    apiEndPoint: string;
    axios: AxiosInstance;

    constructor(axios: AxiosInstance, apiKey: string, apiEndPoint: string){
        this.apiKey = apiKey;
        this.apiEndPoint = apiEndPoint;
        this.axios = axios;
    }

    async listByPage(page: number) : Promise<Array<Print>> {
        let url: string = this.apiEndPoint;

        url += `?classification=Prints`;
        url += `&page=${page}`;
        url += `&apikey=${this.apiKey}`;
        
        const response: AxiosResponse = await this.axios.get(url);
        return response.data.records;
    }

};