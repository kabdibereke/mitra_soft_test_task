import { Container } from 'react-bootstrap';
import Header from './Header';
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

interface ILayout {
  children:React.ReactNode,
  button?:boolean
}

const Layout = ({children,button=false}:ILayout) => {
  const navigate = useNavigate()
  return (
    <>
      <Header/>
      <Container fluid="xxl">
          {button && <Button onClick={()=>navigate('/')} variant='dark' style={{marginBottom:'20px'}}>Go Home</Button>}
          {children}
      </Container>
    </>
  )
}

export default Layout