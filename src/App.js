import { useEffect, useState } from "react";
import "./App.css";
import Repos from "./component/repos";
import { useSelector, useDispatch } from "react-redux";
import { setRepo } from "./redux/reducer";

function App() {
  // const [reposData, setReposData] = useState([]);
  const reposData = useSelector((st) => st.git.reposData);
  const dispatch = useDispatch();
  const [seachName, setSeachName] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/vikasMaurya7/repos`)
      .then((res) => res.json())
      .then((data) => dispatch(setRepo(JSON.stringify(data))));
  }, []);
  // console.log(reposData);

  const handleChangeInput = (e) => {
    setSeachName((prev) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${seachName}/repos`)
      .then((res) => res.json())
      .then((data) => dispatch(setRepo(JSON.stringify(data))));
  };

  return (
    <div className="App">
      <header className="App-header">GIT REPO</header>
      <div className="body">
        {/* ---------------------Input Fields--------------------- */}
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search repo"
              value={seachName}
              onChange={handleChangeInput}
            />
            <input type="button" value="Search" onClick={handleSubmit} />
          </form>
        </div>

        {/* ---------------------Repos Component--------------------- */}
        <Repos Reposdata={reposData} />
      </div>
    </div>
  );
}

export default App;
