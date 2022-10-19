import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/repoDescription.css";
import { useSelector, useDispatch } from "react-redux";
// import { setRepo } from "../redux/reducer";

const repoDescription = () => {
  const { id } = useParams();
  const reposData = useSelector((st) => st.git.reposData);
  const repoData = reposData.filter((el) => el.id == id);
  console.log(id);
  console.log(repoData);
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/");
  };
  return (
    <>
      <header className="repo-header">
        <button className="btn1" onClick={handleback}>
          back
        </button>
        <span>GIT REPO</span>
      </header>
      <div className="newRepoContainer">
        <div className="leftField">
          <img src="https://picsum.photos/200/300" alt="on image" />
          <span>{repoData[0]?.name}</span>
        </div>
        <div className="rightField">
          <p className="appn">Application</p>
          <span className="reponame">{repoData[0]?.name}</span>
          <input type="button" value="Set up a plan" />
          <p>
            {repoData[0]?.description
              ? repoData[0]?.description
              : "No description is given about this repo"}
          </p>
        </div>
      </div>
    </>
  );
};

export default repoDescription;
