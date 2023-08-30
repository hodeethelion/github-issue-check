import IssueCard from "../components/IssueCard";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getIssues } from "../apis/Issue";
import { useIssueDispatch, useIssueSelector } from "../contexts";

const Issuelist = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useIssueDispatch();
  const { issueList, isError, isLoading } = useIssueSelector();

  const handlePage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    getIssues(dispatch, page);
    if (isError) navigate("/not-found");
  }, []);
  return (
    <main>
      {issueList.map((issue, index) => {
        const { id, number, title, user } = issue;
        return (
          <div className="card border-solid border-2">
            <div>
              # {number} : {title}
              {/* 작성자: {user} */}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Issuelist;
