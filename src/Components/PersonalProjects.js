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
import aws from './assets/aws.png';
import geolocalizer from './assets/geolocalizer.png'



const PersonalProjects = () => {
  return <div>
            <Row xs={1}  className="g-0">
              <Card className="cardSettings ">
              <a href="https://giving-is-cool.web.app/" target="_blank" rel="noopener noreferrer">
                <Card.Header className ="projectTitle" >Giving Is Cool (underconstruction)</Card.Header>
                </a>
                

                <Card.Body>
                <a href="https://giving-is-cool.web.app/" target="_blank" rel="noopener noreferrer">
                <Card.Img className='imageBorder' src={givingIsCool} />
                </a>
                  <Card.Text>
                    
                    E-commerce where people can buy items that poor people posted as their needs.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with <span> </span>
                    <img className='InlineskillImage' src={react} alt="" />
                    <img className='InlineskillImage' src={firebase} alt="" />
                    </p>
                    </Card.Text>                  
                </Card.Body>
                
              </Card>

              <Card className="cardSettings ">
              <a href="https://master.d3ujgv6nlwizay.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
              <Card.Header className ="projectTitle" >Geolocalizer</Card.Header>
              </a>
                <Card.Body>
                <a href="https://master.d3ujgv6nlwizay.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
                <Card.Img className='imageBorder' src={geolocalizer} />
                </a>
                  <Card.Text>
                    Google map that shows pins fetching data from Google sheets, simply add a line and your info will be geolocalized, I can also fetch the data via API
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with <span> </span>
                    <img className='InlineskillImage' src={react} alt="" /><span> </span>
                    <img className='InlineskillImage' src={aws} alt="" />
                    </p>
                    </Card.Text>                  
                </Card.Body>
              </Card>


              
              <Card className="cardSettings ">
              <a href="https://consejosdedios.org/" target="_blank" rel="noopener noreferrer">
              <Card.Header className ="projectTitle">Consejos de Dios</Card.Header>
              </a>
                <Card.Body>
                <a href="https://consejosdedios.org/" target="_blank" rel="noopener noreferrer">
                <Card.Img className='imageBorder' src={consejosDeDios} />
                </a>
                  <Card.Text>
                    
                    Small spanish search engine that fetches bible quotes, based on keywords.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with <span> </span>
                    <img className='InlineskillImage' src={html5} alt="" /> <span> </span>
                    <img className='InlineskillImage' src={css} alt="" /><span> </span>
                    <img className='InlineskillImage' src={js} alt="" />
                    <img className='InlineskillImage' src={firebase} alt="" />
                    <img className='InlineskillImage' src={digitalocean} alt="" />
                    </p>
                    </Card.Text>

                  
                </Card.Body>
              </Card>


              <Card className="cardSettings ">
              <a href="http://devotionmodels.pt/" target="_blank" rel="noopener noreferrer">
              <Card.Header className ="projectTitle">Devotion Models</Card.Header>
              </a>
                <Card.Body>
                <a href="http://devotionmodels.pt/" target="_blank" rel="noopener noreferrer">
                <Card.Img className='imageBorder' src={devotionmodels} />
                </a>
                  <Card.Text>
                    
                    Portuguese Static website for a friend.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with <span> </span>
                    <img className='InlineskillImage' src={html5} alt="" /><span> </span>
                    <img className='InlineskillImage' src={css} alt="" /><span> </span>
                    <img className='InlineskillImage' src={js} alt="" />

                    </p>
                    </Card.Text>

                  
                </Card.Body>
              </Card>


              
              <Card className="cardSettings ">
              <a href="https://asesoriasantetransito.com/" target="_blank" rel="noopener noreferrer">
              <Card.Header className ="projectTitle">Asesorias Ante Transito</Card.Header>
              </a>
                <Card.Body>
                <a href="https://asesoriasantetransito.com/" target="_blank" rel="noopener noreferrer">
                <Card.Img className='imageBorder' src={asesoriasantetransito} />
                </a>  
                  <Card.Text>
                    
                    Spanish Static website ultra optimized for SEO.
                    <br/>
                    <br/>
                    <p className="rightAligned">
                    Built with <span> </span>
                    <img className='InlineskillImage' src={html5} alt="" /> <span> </span>
                    <img className='InlineskillImage' src={css} alt="" /><span> </span>
                    <img className='InlineskillImage' src={js} alt="" />
                    <img className='InlineskillImage' src={firebase} alt="" />
                    <img className='InlineskillImage' src={digitalocean} alt="" />
                    </p>
                    </Card.Text>

                  
                </Card.Body>
              </Card>

              
              
            </Row>
  </div>;
};

export default PersonalProjects;
