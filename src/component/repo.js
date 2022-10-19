import React, { useEffect, useState } from "react";
import "../style/repo.css";
import { Link } from "react-router-dom";

const repo = ({ repoData }) => {
  return (
    <Link
      to={`/user/${repoData.id}`}
      // onClick={(event) => event.preventDefault()}
      style={{
        textDecoration: "none",
        // pointerEvents: "none",
        color: "inherit",
      }}
      className="repoContainer"
    >
      <div className="first">
        <img src={repoData.owner.avatar_url} alt="on image" />
      </div>
      <div className="second">
        <span
          style={{
            fontWeight: "500",
            textTransform: "capitalize",
            marginBottom: "6px",
          }}
        >
          {repoData?.name}
        </span>
        <span style={{ texAlign: "start" }}>
          {repoData?.description
            ? repoData?.description
            : "No description is given about this repo"}
        </span>
      </div>
    </Link>
  );
};

export default repo;
