import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteAll,filterTodo } from '../actions';
import List from './list'
import { v4 as uuid } from 'uuid';


const Todo = () => {
    const [inputData, setInputData] = useState();

    const filterVal = useSelector((val) => {
      return val.todoReducer.filterText
    })
    const list = useSelector((val) => {
        if(filterVal)
          return val.todoReducer.todoList.filter((item) => item.status == filterVal)
        else
          return val.todoReducer.todoList
    })
    const dispatch = useDispatch();
    const handleTodo = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                title: task,
                id: uuid(),
                status:1
            }
            const action = addTodo(payload);
            dispatch(action);
            console.log("payload", payload)
        }
        catch (error) {
            console.log("error", error)
        }
    }

    const onChangeStatus=(f) => {
      try {

          const payload = {
              filterText:f
          }
          const action = filterTodo(payload);
          dispatch(action);
          console.log("payload", payload)
      }
      catch (error) {
          console.log("error", error)
      }
    }

        return (
        <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={8}>
              <Form.Control className="me-auto" placeholder="Add your item here..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => handleTodo(inputData)}>Add Todo</Button>
            </Col>

          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <Form.Select aria-label="Default select example" value={filterVal} as="select" onChange={(e) => onChangeStatus(e.target.value)}>
                <option value="">All</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </Form.Select>
              </Col>
            <Col>
              <Button variant="outline-danger" onClick={()=> dispatch(deleteAll())}>Delete All</Button>
            </Col>
          </Row>
          <Row>

            {

                list.map((item) => {

                  return (
                    <List data={item} />
                  )
                })

              }

          </Row>
        </Container>

        </div>
    )
}

export default Todo
