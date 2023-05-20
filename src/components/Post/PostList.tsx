
import { useEffect } from "react";

import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getPostStart } from "../../redux/slice/postSlice";
import { Alert, Spinner } from "react-bootstrap";



const PostList = () => {
  const {post,loading,error} = useSelector((state: RootState) => state.post);
  
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getPostStart());
  }, []);

  return (
    <>
      
     {loading ?  <div style={{width:'100%', display:"flex", alignItems:'center', justifyContent:'center'}}><Spinner animation="border" /></div>:
     error ? <Alert  variant='danger'>Something went wrong...try later</Alert> :
     post.map(item=>{
        return <PostItem 
                key={item.id} 
                userId={item.userId} 
                id={item.id} 
                title={item.title} 
                body={item.body}/>
        })
     }
 
    </>
  )
}

export default PostList

