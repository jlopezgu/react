import CustomDataTable from "./customDataTable";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {useEffect, useState} from "react";


const ModalForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState(1)
  const [categories, setCategories] = useState([{id:1, name:"Sports"}])

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://subscriber-backend.herokuapp.com/category/`
      fetch(url, {mode: 'cors'})
        .then(res => res.json())
        .then(
          (data) => {
            setCategories(data.results)
          },
          (error) => {
            console.log(error)
          }
        )
    }
    fetchData()
  }, [])
  const onModalSubmit = async (e) => {
    e.preventDefault()
    fetch('https://subscriber-backend.herokuapp.com/message/', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        category: category
      })
    })
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data)
          window.location.reload()
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    <Form onSubmit={onModalSubmit}>
      <Form.Group as={Row} className='mb-3' controlId='message'>
        <Form.Label column sm={2}>
          Message
        </Form.Label>
        <Col sm={10}>
          <Form.Control type='text' placeholder='' value={message} onChange={(e) => setMessage(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='mb-3' controlId='category'>
        <Form.Label column sm={2}>
          Category
        </Form.Label>
        <Col sm={10}>
          <Form.Control as='select' value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => {
              return <option value={cat.id} key={cat.id}>{cat.name}</option>
            })}
         </Form.Control>
        </Col>
      </Form.Group>

      <Col sm={{ span: 10, offset: 2 }}>
        <Button variant='primary' type='submit' disabled={!message}> Submit </Button>
      </Col>
    </Form>
  )
}
const Message = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onModalFormSubmit = () => {
    console.log('')
  }

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      width: '100px'
    },
    {
      name: 'Message',
      selector: row => row.message,
      width: '470px'
    },
    {
      name: 'Category',
      selector: row => row.category,
      width: '100px'
    },
    {
      name: 'Created',
      selector: row => Date(row.created),
      width: '400px'
    }
  ]

  return <>
    <CustomDataTable columns={columns} id="message"/>
    <Button variant='primary' onClick={handleShow}>Create</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm onSubmit={onModalFormSubmit} />
        </Modal.Body>
      </Modal>
  </>
}

export default Message
