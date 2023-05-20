
import { useEffect } from "react";

import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getPostStart } from "../../redux/slice/postSlice";
import { Spinner } from "react-bootstrap";



const PostList = () => {
  const posts = useSelector((state: RootState) => state.post.post);
  const loading = useSelector((state: RootState) => state.post.loading);
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getPostStart());
  }, []);

  return (
    <>
     {loading ?  <div style={{width:'100%', display:"flex", alignItems:'center', justifyContent:'center'}}><Spinner animation="border" /></div>:
      posts.map(item=>{
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

