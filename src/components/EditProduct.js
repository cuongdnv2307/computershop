import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFilter } from '../redux/actions/filter'
import { Modal ,Button} from "react-bootstrap";


export default function EditProduct({ text }) {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  return (
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  )
}
