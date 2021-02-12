import axios from "axios";

export const sendCheck = async (id) => {
  const { data } = await axios.post(
    `/api/non_members/${id}/sent_check`
  );
  return data;
}
