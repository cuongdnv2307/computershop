import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import { fetchTodosAsync } from "./redux/actions/todos";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/600x315/c6/e0/6b/c6e06b45686d2c418213eeaba7193fc9.jpg" width={180} height={250}  />
      </Card>
      <TodoList />
    </>
  );
}

export default App;
