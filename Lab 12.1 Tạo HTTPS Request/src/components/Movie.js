import { useState } from "react";
import classes from "./Movie.module.css";

const Movie = () => {
  const [dataMovie, setDataMovie] = useState([]);
  //lay du lieu tu api
  const fetchHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://react-http-a1e7c-default-rtdb.firebaseio.com/movies.json"
    );
    const data = await res.json();
    console.log(data);
    //duyet Obj tra ve dua phim ve mang
    const movieArr = [];
    for (const key in data) {
      const movieObj = {
        id: key,
        ...data[key],
      };
      //them obj vao arr
      movieArr.push(movieObj);
    }
    setDataMovie(movieArr);
  };

  //render
  return (
    <div>
      <div className="section">
        <button onClick={fetchHandler}>Fetch Movies</button>
      </div>
      {dataMovie.length !== 0 ? (
        <div className="section">
          <ul className={classes["movies-list"]}>
            {dataMovie.map((item) => (
              <li className={classes.movie} key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.releaseDate}</h3>
                <p>{item.openingText}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movie;
