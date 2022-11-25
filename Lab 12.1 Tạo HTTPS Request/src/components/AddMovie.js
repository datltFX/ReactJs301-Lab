import { useState } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [opening, setOpening] = useState("");
  const [release, setRelease] = useState("");

  //submit
  const submitAddhandler = async (e) => {
    e.preventDefault();
    //tao obj chua cac thong tin
    if (title !== "" && opening !== "" && release !== "") {
      const dataAddMovie = {
        title: title,
        openingText: opening,
        releaseDate: release,
      };
      console.log(dataAddMovie);
      //post data len sever
      const res = await fetch(
        "https://react-http-a1e7c-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(dataAddMovie),
          Headers: { "Content-Type": "application/json" },
        }
      );
      //dulieu phan hoi tu sever
      const data = await res.json();
      console.log(data);
      //reset input form
      setTitle("");
      setOpening("");
      setRelease("");
    }
  };
  return (
    <form onSubmit={submitAddhandler} className="section">
      <div className={classes.control}>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
          value={title}
        />
      </div>
      <div className={classes.control}>
        <label>opening Text</label>
        <textarea
          rows="6"
          onChange={(e) => setOpening(e.target.value)}
          required
          value={opening}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label>Release Date</label>
        <input
          type="text"
          onChange={(e) => setRelease(e.target.value)}
          required
          value={release}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
