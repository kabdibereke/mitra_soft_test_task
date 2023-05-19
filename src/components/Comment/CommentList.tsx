import {  ListGroup, Spinner } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useEffect, useState } from 'react';
import { IComment } from '../../interface/interface';
import axios from 'axios';

const CommentList = ({showComments,id}:{showComments: boolean,id:number}) => {
    const [comments, setComments] = useState<IComment[]>([]);
    const [loading,setLoading]=useState(false)
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            setComments(response.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

   useEffect(()=> {
    if(showComments) {
        fetchData()
    }
   },[showComments])
  return (
    <ListGroup as="ul" style={{marginTop:'10px'}}>
       {comments.map(item=>{
        return <CommentItem 
                key={item.id} 
                email={item.email} 
                postId={item.postId} 
                id={item.id} 
                name={item.name} 
                body={item.body}/>
       })}
       {loading && <div style={{margin:'20px'}}><Spinner animation="border" /></div>}
    </ListGroup>
  )
}

export default CommentList