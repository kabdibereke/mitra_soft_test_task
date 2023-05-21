import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import {  IComment, IPost } from '../../interface/interface';
import { Button } from 'react-bootstrap';
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdPerson2 } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import CommentList from '../Comment/CommentList';
import axios from 'axios';


const PostItem = ({ id,userId,body,title}:IPost) => {
    const navigate = useNavigate();
    const [showComments, setShowComments]=useState(false)
    const [comment,setComment] =useState<IComment[]>([])
    const [loading, setLoading] =useState(false)
    const [error,setError] =useState<string | null>(null)
    const fetchComments = async (id: number) => {
        try {
            setLoading(true)
            const response = await axios.get<IComment[]>(
                `https://jsonplaceholder.typicode.com/comments`, {
                    params: {
                        postId:id
                    }
                },
            );
            setTimeout(()=> {
                setComment(response.data)
                setLoading(false)
            },500)
        } catch (error) {
            setError('error')
            setLoading(false)
        }
    };

    const toggleComment =()=> {
        setShowComments(!showComments)
        if(!showComments) {
            fetchComments(id)
        }
    }
  return (
    <Card style={{ width: '100%', marginTop:"20px" }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {body}
            </Card.Text>
            <Button variant='dark' onClick={toggleComment}>
               {!showComments?  "See Comments" : "Hide Comments"}
                <BsFillChatLeftTextFill style={{marginLeft:'5px'}} />
            </Button>
            <Button onClick={()=>navigate(`/${userId}`)} variant='dark' style={{marginLeft:'5px'}}>
                <MdPerson2   />
            </Button>
          
            {showComments && <CommentList comment={comment} loading={loading} error={error}/>}
            
        </Card.Body>
    </Card>
  )
}

export default PostItem