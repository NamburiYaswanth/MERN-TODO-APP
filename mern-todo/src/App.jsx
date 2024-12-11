import Input from "./components/Input";
import Tasks from "./components/Tasks";
import './styles/main.css';

const App = () => {
  return (
    <div className="app">
      <main>
        <h2 className="title">Task Manager</h2>
        <Input />
        <Tasks />
      </main>
    </div>
  );
};

export default App;
