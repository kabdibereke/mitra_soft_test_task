import { Badge, ListGroup } from 'react-bootstrap'
import { IComment } from '../../interface/interface'


const CommentItem = ({id,postId,email, body,name}:IComment) => {
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