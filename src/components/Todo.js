import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { removeTodoAsync, toggleTodoAsync } from "../redux/actions/todos";
import { Figure, Caption, Image, Card } from "react-bootstrap";
import { Table } from "reactstrap";
import EditProduct from "./EditProduct"

function Todo({ todo }) {

  const dispatch = useDispatch();

  const [showEditProduct, setShowEditProduct] = useState(false);


  const onToggleTodo = () => {
    dispatch(
      toggleTodoAsync(todo.id, {
        completed: !todo.completed,
      })
    );
  };

  return (
    <>
    <>
    <tr>
      <th scope="row">{todo.id}</th>
      <td>
        <Image src={todo.url} width={250}></Image>
      </td>
      <td>{todo.model}</td>
      <td>{todo.content}</td>
      <td>{todo.price}</td>
      <td> <button onClick={()=>setShowEditProduct(true)}>Edit</button>
        <button onClick={() => dispatch(removeTodoAsync(todo.id))}>Delete</button></td>
    </tr>
    </>
    {/* {showEditProduct ? <div></div> : <EditProduct/>} */}
    </>
    
  );
}

export default Todo;
