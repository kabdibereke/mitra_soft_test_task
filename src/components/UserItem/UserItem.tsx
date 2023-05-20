import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import {  Alert, ListGroup, Spinner } from 'react-bootstrap';
import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getUserStart } from '../../redux/slice/userSlice';

const UserItem = () => {
  const {pathname} =useLocation()
  const {user,loading,error} = useSelector((state: RootState) => state.user);
  
  const dispatch =useDispatch()

  useEffect(()=> {
    //@ts-ignore
    dispatch(getUserStart(+pathname.substring(1)));
  },[])
  return (
    <Card className="text-center">
        {loading  ?  <div style={{margin:'20px'}}><Spinner animation="border" /></div>: 
          error ? <Alert  variant='danger'>Something went wrong...try later</Alert> :
          <>
            <Card.Header>{user?.email}</Card.Header>
            <Image style={{margin:'20px auto'}} width={100} height={100} roundedCircle src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=500'/>
            <Card.Body>
                <Card.Title>Name: {user?.name}
                </Card.Title>
                <Card.Title>Username: {user?.username}
                </Card.Title>
                <Card.Title>About:</Card.Title>
                <ListGroup style={{width:'fit-content',margin:'0 auto'}}>
                  <ListGroup.Item>Phone: {user?.phone}</ListGroup.Item>
                  <ListGroup.Item>Website: {user?.website}</ListGroup.Item>
                  <ListGroup.Item>Company: {user?.company?.name}</ListGroup.Item>
                </ListGroup>
                <Card.Title style={{marginTop:'20px'}}>Address:</Card.Title>
                <ListGroup style={{width:'fit-content',margin:'0 auto'}}>
                  <ListGroup.Item>City: {user?.address?.city}</ListGroup.Item>
                  <ListGroup.Item>Street: {user?.address?.street}</ListGroup.Item>
                  <ListGroup.Item>Suite: {user?.address?.suite}</ListGroup.Item>
                  <ListGroup.Item>Zipcode: {user?.address?.zipcode}</ListGroup.Item>  
                </ListGroup>
            </Card.Body>
          </>
        } 
        
          
    </Card>
  )
}

export default UserItem