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
            <Image style={{margin:'20px auto'}} width={100} height={100} roundedCircle src='https://avatars.githubusercontent.com/u/100946196?s=400&u=36a650485152977618a696bc2f15551cd15dfc8b&v=4'/>
            <Card.Body>
                <Card.Title>Name:
                  Кабди Береке
                </Card.Title>
                <Card.Title>Age:
                  25 лет
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