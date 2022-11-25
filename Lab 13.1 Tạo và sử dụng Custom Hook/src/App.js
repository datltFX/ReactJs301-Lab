import "./App.css";
import TaskForm from "./components/NewTask/TaskForm";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div>
      <div className="section">
        <TaskForm />
      </div>
      <div className="section">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
