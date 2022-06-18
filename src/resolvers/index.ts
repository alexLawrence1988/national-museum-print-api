import NationalMuseumPrint from '../classes/NationalMuseumPrint';
import axios from 'axios';

export default {
    Query: {
      listByPage: async (_: any, args: { page: number }) => {
        const nationalMuseumPrint = new NationalMuseumPrint(
            axios,
            process.env.API_KEY,
            process.env.API_URL
          );
          return nationalMuseumPrint.listByPage(args.page);
      },
    },
  };