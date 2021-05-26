import axios from "axios";

export const getMovieSchedule = async (query: {
  channel: string;
  from: number;
  to: number;
}): Promise<object> => axios.post(`/api/getMovieSchedule`, { query });
