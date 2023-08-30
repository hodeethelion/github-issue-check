import { IssueActionTypes } from "../contexts";
import { Issue } from "../types/index";
import { axiosInstance } from "../utils/axiosInstance";

export const getIssues = async (
  dispatch: React.Dispatch<{
    type: IssueActionTypes;
    data?: Issue[];
  }>,
  page: number
): Promise<void> => {
  dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_LOADING });
  try {
    const { data } = await axiosInstance.get(
      `/issues?sort=comments&page=${page}&per_page=10`
    );
    console.log(data);

    dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_SUCCESS, data });
  } catch {
    dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_ERROR });
  }
};

export const getIssueDetail = async (
  dispatch: React.Dispatch<{
    type: IssueActionTypes;
    data?: Issue;
  }>,
  issueNumber: number
): Promise<void> => {
  dispatch({ type: IssueActionTypes.GET_ISSUE_DETAIL_LOADING });
  try {
    const { data } = await axiosInstance.get(`/issues/${issueNumber}`);

    dispatch({ type: IssueActionTypes.GET_ISSUE_DETAIL_SUCCESS, data });
  } catch {
    dispatch({ type: IssueActionTypes.GET_ISSUE_DETAIL_ERROR });
  }
};
