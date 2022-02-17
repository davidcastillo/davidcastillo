import Skills from './Components/Skills';
import PersonalProjects from './Components/PersonalProjects';
import Experiences from './Components/Experiences';
import Languages from './Components/Languages';
import {Container,
        Row,
        Col,
        Stack} from 'react-bootstrap';
import './App.css';
import { MdOutlineEmail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col className="header">
            <h1 className="h1Title"><span>DAVID CASTILLO</span></h1>
            <h2 className="h2Subtitle">SOFTWARE DEVELOPER</h2>
          </Col>
        </Row>
        
        <Row xs={1} md={4} className="contactBar align-items-center">
        <a href="tel:+351916001764"><Col><MdPhone/> +351 916 001 764</Col></a>
        <a href="https://github.com/davidcastillo"><Col><FaGithub/> castillorg</Col></a>
        <a href="mailto:castillorganization@gmail.com"><Col><MdOutlineEmail/> castillorganization@gmail.com</Col></a>
        <a href="https://goo.gl/maps/kjErAmGxeSfnANck7"><Col>Lagos, Portugal 🇵🇹</Col></a>
        </Row>
        


        <Row xs={1} className="g-4">

          <Col md={5}>
            <Stack gap={2}>
                <Container fluid> 
                  <h2 className="sectionTitle">PROFILE</h2>
                  <Row className="justify-content-md-center">
                      <div>
                      <img alt="David Castillo"className='profileImage' src="https://media-exp1.licdn.com/dms/image/C4E03AQHxAVUfsL81Lg/profile-displayphoto-shrink_400_400/0/1562943490508?e=1648080000&v=beta&t=QwwqNYT1fP2kRPdicwwni3GDeAVynU1IoMth0Wj0RvU">
                      </img>
                      </div>
                  </Row>              
                  <p>
                  I have experience and technical knowledge in programming JS, excellent level of English and an intermediate level
                  of French and Portuguese. 
                  </p>
                  <h2 className='sectionTitle'>
                    PROJECTS EXPERIENCE
                  </h2>
                    <PersonalProjects/>
                </Container>
              </Stack>
          </Col>

          <Col md={7}>
            <Stack gap={3}>
              <h2 className="sectionTitleGrey">SKILLS</h2>
              <Skills></Skills>
              <h2 className="sectionTitleGrey">EXPERIENCES</h2>
              <Experiences></Experiences>
              <h2 className="sectionTitleGrey">LANGUAGES</h2>
              <Languages/>
            </Stack>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
