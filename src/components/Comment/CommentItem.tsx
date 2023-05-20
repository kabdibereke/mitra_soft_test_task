import { Badge, ListGroup } from 'react-bootstrap'


interface ICommentItem {
  email:string,
  body:string
}
const CommentItem = ({email, body}:ICommentItem) => {
  return (
    <ListGroup.Item as="li" >
      <Badge bg="dark">{email}</Badge>
      <div style={{marginTop:'10px'}}>
      {body}
      </div>
    </ListGroup.Item>
  )
}

export default CommentItem