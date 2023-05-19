import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import {  IPost } from '../../interface/interface';
import { Button } from 'react-bootstrap';
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdPerson2 } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CommentList from '../Comment/CommentList';

const PostItem = ({id,userId,body,title}:IPost) => {
    const navigate = useNavigate();
    const [showComments, setShowComments]=useState(false)
   
  return (
    <Card style={{ width: '100%', marginTop:"20px" }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {body}
            </Card.Text>
            <Button variant='dark' onClick={()=>setShowComments(!showComments)}>
               {!showComments?  "See Comments" : "Hide Comments"}
                <BsFillChatLeftTextFill style={{marginLeft:'5px'}} />
            </Button>
            <Button onClick={()=>navigate(`/${userId}`)} variant='dark' style={{marginLeft:'5px'}}>
                <MdPerson2   />
            </Button>
          
            {showComments && <CommentList showComments={showComments} id={id}/>}
            
        </Card.Body>
    </Card>
  )
}

export default PostItem