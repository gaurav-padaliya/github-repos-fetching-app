import React from "react";
import Repo from "./repo";
import "../style/repos.css";

const repos = ({ Reposdata }) => {
  console.log(Reposdata);
  return (
    <div className="reposContainer">
      {Reposdata?.message ? (
        <div style={{ margin: "auto", marginTop: "30px", fontWeight: 500 }}>
          No data found you have add invalid user please check it again
        </div>
      ) : Reposdata.length !== 0 ? (
        Reposdata?.map((repoData) => (
          <Repo key={repoData?.id} repoData={repoData} />
        ))
      ) : (
        "NO data"
      )}
    </div>
  );
};

export default repos;
