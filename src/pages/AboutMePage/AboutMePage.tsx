import { Button, Card,Image, ListGroup } from "react-bootstrap"
import Layout from "../../Layout/Layout"

import { useNavigate } from "react-router-dom"


const AboutMePage = () => {
  const navigate = useNavigate()
  return (
    <Layout>
        <Button onClick={()=>navigate('/')} variant='dark' style={{marginBottom:'20px'}}>Go Home</Button>
        <Card className="text-center">
            <Card.Header>kabdibereke@gmail.com</Card.Header>
            <Image style={{margin:'20px auto'}} width={100} height={100} roundedCircle src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=500'/>
            <Card.Body>
                <Card.Title>Name:
                  Кабди Береке
                </Card.Title>
                <ListGroup style={{width:'fit-content',margin:'0 auto'}}>
                  <ListGroup.Item>Website: https://github.com/kabdibereke</ListGroup.Item>
                  <ListGroup.Item>City: Караганда</ListGroup.Item>
                </ListGroup>
                <Card.Title style={{margin:'20px 100px',lineHeight:'40px'}}>
                    Фронтендом занимаюсь уже 2 года, из них 3 месяца коммерческого  опыта. 
                    <br/> В основном занимаюсь на Frontendmentor.io оттуда черпаю идеи.  
                </Card.Title>
            </Card.Body>
      </Card>
    </Layout>
  )
}

export default AboutMePage