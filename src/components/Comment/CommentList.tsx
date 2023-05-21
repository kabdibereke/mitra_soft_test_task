import {  Alert, ListGroup, Spinner } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { IComment } from '../../interface/interface';
interface ICommentList {
	comment: IComment[];
	loading: boolean;
	error: string | null;
}
const CommentList = ({loading, comment, error}:ICommentList) => {
   
  return (
    <ListGroup as="ul" style={{marginTop:'10px'}}>
       
       {loading ? <div style={{margin:'20px'}}><Spinner animation="border" /></div>:
       error ? <Alert  variant='danger'>Something went wrong...try later</Alert> :
       comment.map(item=>{
        return <CommentItem 
                key={item.id} 
                email={item.email} 
                body={item.body}/>
       })
       }
       
      
    </ListGroup>
  )
}

export default CommentList