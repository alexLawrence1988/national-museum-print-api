import { AxiosInstance, AxiosResponse } from 'axios';
import { PrintQueryReturn, PrintQueryParamSet } from '../global/types';

export default class NationalMuseumPrint {

    apiKey: string;
    apiEndPoint: string;
    axios: AxiosInstance;

    constructor(axios: AxiosInstance, apiKey: string, apiEndPoint: string){
        this.apiKey = apiKey;
        this.apiEndPoint = apiEndPoint;
        this.axios = axios;
    }

    //TODO: update return type to hard type
    async listByPage(params: PrintQueryParamSet) : Promise<PrintQueryReturn> {
        let url: string = this.apiEndPoint;
        // TODO: handle field value filtering better
        const response: AxiosResponse = await this.axios.get(url, {
            params: {
                ...params,
                apikey: this.apiKey,
                q: "(accesslevel:1)AND(imagepermissionlevel:0)AND(verificationlevel:4)"
            }
        });
        
        return response.data;
    }

};