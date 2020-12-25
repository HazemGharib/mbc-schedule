import axios from "axios";

export const getMovieSchedule = async (query: {
  channel: string;
  from: number;
  to: number;
}): Promise<object> =>
  axios.get(`
    ${process.env.VUE_APP_MBC_API_URL}?channel=${query.channel}&from=${query.from}&to=${query.to}
  `);
