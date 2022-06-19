import NationalMuseumPrint from '../classes/NationalMuseumPrint';
import axios from 'axios';
import { PrintQueryParamSet } from '../global/types';

export default {
    Query: {
      listByPage: async (_: any, args: PrintQueryParamSet) => {
        const nationalMuseumPrint = new NationalMuseumPrint(
            axios,
            process.env.API_KEY,
            process.env.API_URL
          );
          return nationalMuseumPrint.listByPage(args);
      },
    },
  };