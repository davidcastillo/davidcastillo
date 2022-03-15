import React from 'react';
import {
    Row,
    Card} from 'react-bootstrap';

import react from './assets/react.png';
import givingIsCool from './assets/GiveIsCool.png';
import firebase from './assets/firebase.png';
import html5 from './assets/html5.png';
import js from './assets/js.png';
import css from './assets/CSS3.png';
import consejosDeDios from './assets/ConsejosDeDios.png';
import digitalocean from './assets/digitalocean.jpg';
import asesoriasantetransito from './assets/asesoriasAnteTransito.png'
import devotionmodels from './assets/devotionModels.png'


const PersonalProjects = () => {
  return <div>
            <Row xs={1}  className="g-0">
              <Card className="cardSettings ">
              <Card.Header>Giving Is Cool (underconstruction)</Card.Header>
                <Card.Body>
                <Card.Img className='imageBorder' src={givingIsCool} />
                  <Card.Text>
                    
                    E-commerce where people can buy items that poor people posted as their needs.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with 
                    <img className='InlineskillImage' src={react} alt="" />
                    <img className='InlineskillImage' src={firebase} alt="" />
                    </p>
                    </Card.Text>                  
                </Card.Body>
              </Card>


              
              <Card className="cardSettings ">
              <Card.Header>Consejos de Dios</Card.Header>
                <Card.Body>
                <Card.Img className='imageBorder' src={consejosDeDios} />
                  <Card.Text>
                    
                    Small spanish search engine that fetches bible quotes, based on keywords.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with
                    <img className='InlineskillImage' src={html5} alt="" />
                    <img className='InlineskillImage' src={css} alt="" />
                    <img className='InlineskillImage' src={js} alt="" />
                    <img className='InlineskillImage' src={firebase} alt="" />
                    <img className='InlineskillImage' src={digitalocean} alt="" />
                    </p>
                    </Card.Text>

                  
                </Card.Body>
              </Card>


              <Card className="cardSettings ">
              <Card.Header>Devotion Models</Card.Header>
                <Card.Body>
                <Card.Img className='imageBorder' src={devotionmodels} />
                  <Card.Text>
                    
                    Portuguese Static website for a friend.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with
                    <img className='InlineskillImage' src={html5} alt="" />
                    <img className='InlineskillImage' src={css} alt="" />
                    <img className='InlineskillImage' src={js} alt="" />

                    </p>
                    </Card.Text>

                  
                </Card.Body>
              </Card>


              
              <Card className="cardSettings ">
              <Card.Header>Asesorias Ante Transito</Card.Header>
                <Card.Body>
                <Card.Img className='imageBorder' src={asesoriasantetransito} />
                  <Card.Text>
                    
                    Spanish Static website ultra optimized for SEO.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with
                    <img className='InlineskillImage' src={html5} alt="" />
                    <img className='InlineskillImage' src={css} alt="" />
                    <img className='InlineskillImage' src={js} alt="" />
                    <img className='InlineskillImage' src={digitalocean} alt="" />

                    </p>
                    </Card.Text>

                  
                </Card.Body>
              </Card>

              
              
            </Row>
  </div>;
};

export default PersonalProjects;
