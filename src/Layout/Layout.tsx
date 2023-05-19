import { Container } from 'react-bootstrap';
import Header from './Header';

const Layout = ({children}:{children:React.ReactNode}) => {

  return (
    <>
        <Header/>
        <Container fluid="xxl">
            {children}
        </Container>
    </>
  )
}

export default Layout