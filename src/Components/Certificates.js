import React from 'react';
import certificate from './assets/FreeCodeCampCertificateDavidCastillo.png';

import {Table} from 'react-bootstrap';
import '../App.css';


const Certificates = () => {
    return ( 
      <div>
          <img className="imgCertificates"src={certificate} alt="" />
        </div>
    );
}
 
export default Certificates;
