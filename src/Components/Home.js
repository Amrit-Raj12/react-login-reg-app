import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

  const [task, setTask] = useState({
    category: "",
    language: "",
    genre: "",
    sort: "",
  });

  const { category, language, genre, sort } = task;
  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  let ress;

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(task);
    var bodyFormData = new FormData();
    bodyFormData.append("category", task["category"]);
    bodyFormData.append("language", task["language"]);
    bodyFormData.append("genre", task["genre"]);
    bodyFormData.append("sort", task["sort"]);

    axios({
      method: "post",
      url: "https://hoblist.com/api/movieList",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        console.log(response.data.result);
        ress = response.data.message;
        document.getElementById("msg").innerHTML = `Status : ${ress}`;
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    setFlag(true);

    navigate('/movies');
  };
  return (
    <>
      {flag && <Alert className="text-success" id="msg"></Alert>}
      <div>
        <div className="task_container">
          <img
            src="https://image.freepik.com/free-vector/people-cinema-hall-waiting-movie-time-3d-horizontal-isometric-illustration_1284-59465.jpg"
            alt=""
          />
          <div className="task_container-text">
            <div>
              <h3>Enter the Film Details.</h3>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. movies, etc"
                    value={category}
                    onChange={(e) => onInputChange(e)}
                    name="category"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Language</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. kannada, etc"
                    value={language}
                    onChange={(e) => onInputChange(e)}
                    name="language"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. all"
                    value={genre}
                    onChange={(e) => onInputChange(e)}
                    name="genre"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Sort</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="eg. voting"
                    value={sort}
                    onChange={(e) => onInputChange(e)}
                    name="sort"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Post Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
