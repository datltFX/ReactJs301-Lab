//do
import React, { useEffect, useState } from "react";
import useHttp from "../../Hooks/useHttp";
import classes from "./TaskItem.module.css";

function TaskItem() {
  const [dataTask, setDataTask] = useState([]);
  const { fetchApi } = useHttp();

  //lay dulieu tu api
  useEffect(() => {
    fetchApi(
      "https://react-http-a1e7c-default-rtdb.firebaseio.com/tasks.json"
    ).then((data) => setDataTask(data));
  }, [fetchApi]);
  // console.log(dataTask);

  //render
  return (
    <div>
      {dataTask.length > 0 ? (
        dataTask.map((task) => (
          <li key={task.id} className={classes.task}>
            {task.content}
          </li>
        ))
      ) : (
        <h2 className={classes.para}>No tasks found. Start adding some!</h2>
      )}
    </div>
  );
}

export default TaskItem;
