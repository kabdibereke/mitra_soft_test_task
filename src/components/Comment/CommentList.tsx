import {  ListGroup, Spinner } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getCommentStart } from '../../redux/slice/commentSlice';

const CommentList = ({showComments,id}:{showComments: boolean,id:number}) => {
    const comments = useSelector((state: RootState) => state.comment.comment);
    const loading = useSelector((state: RootState) => state.comment.loading);
    const dispatch =useDispatch()
   
  

   useEffect(()=> {
    if(showComments) {
        //@ts-ignore
        dispatch(getCommentStart(id));
    }
   },[showComments])
  return (
    <ListGroup as="ul" style={{marginTop:'10px'}}>
       {loading ? <div style={{margin:'20px'}}><Spinner animation="border" /></div>:
        comments.map(item=>{
        return <CommentItem 
                key={item.id} 
                email={item.email} 
                postId={item.postId} 
                id={item.id} 
                name={item.name} 
                body={item.body}/>
       })
       }
       
      
    </ListGroup>
  )
}

export default CommentList