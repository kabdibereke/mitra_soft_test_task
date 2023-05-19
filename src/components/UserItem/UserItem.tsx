import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { IUser } from '../../interface/interface';
import {  ListGroup, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UserItem = () => {
  const {pathname} =useLocation()
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${pathname.substring(1)}`);
      setUserData(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  return (
    <Card className="text-center">
        {loading &&  <div style={{margin:'20px'}}><Spinner animation="border" /></div>}
        
          <Card.Header>{userData?.email}</Card.Header>
          <Image style={{margin:'20px auto'}} width={100} height={100} roundedCircle src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=500'/>
          <Card.Body>
              <Card.Title>Name: {userData?.name}
              </Card.Title>
              <Card.Title>Username: {userData?.username}
              </Card.Title>
              <Card.Title>About:</Card.Title>
              <ListGroup style={{width:'fit-content',margin:'0 auto'}}>
                <ListGroup.Item>Phone: {userData?.phone}</ListGroup.Item>
                <ListGroup.Item>Website: {userData?.website}</ListGroup.Item>
                <ListGroup.Item>Company: {userData?.company?.name}</ListGroup.Item>
              </ListGroup>
              <Card.Title style={{marginTop:'20px'}}>Address:</Card.Title>
              <ListGroup style={{width:'fit-content',margin:'0 auto'}}>
                <ListGroup.Item>City: {userData?.address?.city}</ListGroup.Item>
                <ListGroup.Item>Street: {userData?.address?.street}</ListGroup.Item>
                <ListGroup.Item>Suite: {userData?.address?.suite}</ListGroup.Item>
                <ListGroup.Item>Zipcode: {userData?.address?.zipcode}</ListGroup.Item>  
              </ListGroup>
          </Card.Body>
    </Card>
  )
}

export default UserItem