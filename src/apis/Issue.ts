import { Issue } from "../types/index";
import { axiosInstance } from "../utils/axiosInstance";

export const getIssueList = async (): Promise<Issue[]> => {
  const { data } = await axiosInstance.get(
    "/issues?sort=comments&page=1&per_page=10",
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
      },
    }
  );

  return data;
};
