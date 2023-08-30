import React from "react";
import { useParams } from "react-router-dom";

const Issuedetail = () => {
  const params = useParams();
  // params: 오브젝트로 들어오는 데 id는 1이게 될 것 같음
  console.log(params.id);
  return <div>detail</div>;
};

export default Issuedetail;
