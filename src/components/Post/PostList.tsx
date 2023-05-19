import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "../../interface/interface";
import PostItem from "./PostItem";


const PostList = () => {
    const [data, setData] = useState<IPost[]>([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <>
    {data.map(item=>{
            return <PostItem 
                    key={item.id} 
                    userId={item.userId} 
                    id={item.id} 
                    title={item.title} 
                    body={item.body}/>
        })}
    </>
  )
}

export default PostList