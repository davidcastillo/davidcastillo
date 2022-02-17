import React from 'react';
import {
    Accordion} from 'react-bootstrap';

function Experiences() {
  return <div>
      <Accordion  className="justifyContent" alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header>PROJECT MANAGER | MOBIX FRANCE</Accordion.Header>
            <Accordion.Body >
            Technical Consultant in ZOHO APPS for businesses, deployment of functionalities to improve KPI´s performance.
            <p>
            Nov 2016 - Dec 2021
            </p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" >
            <Accordion.Header>WEB MASTER  - QA ANALYST | CAVADU</Accordion.Header>
            <Accordion.Body>
            Site content management, Quality assessment analysis and usability tester
            <p>
            Feb 2016 - Feb 2017
            </p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" >
            <Accordion.Header>DIGITAL MARKETING CONSULTANT | HIPERSERVICIOS</Accordion.Header>
            <Accordion.Body>
            Digital Marketing strategies advisor
            <p>
            Feb 2015 - Feb 2016
            </p>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  </div>;
}

export default Experiences;
