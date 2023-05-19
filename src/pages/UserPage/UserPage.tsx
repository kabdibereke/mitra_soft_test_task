import { Button } from 'react-bootstrap'
import Layout from '../../Layout/Layout'
import UserItem from '../../components/UserItem/UserItem'
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate()
 
  return (
    <Layout>
        <Button onClick={()=>navigate('/')} variant='dark' style={{marginBottom:'20px'}}>Go Home</Button>
        <UserItem />
   </Layout>
  )
}

export default UserPage