import axios from "axios";

export const getNonMembers = async (page = 1) => {
  const { data } = await axios.get(
    `/api/non_members?page=${page}`
  );
  return data;
}
