import React from 'react';
import html5 from './assets/html5.png';
import js from './assets/js.png';
import css from './assets/CSS3.png';
import react from './assets/react.png';
import github from './assets/GitHub.png';
import firebase from './assets/firebase.png';
import aws from './assets/aws.png';
import api from './assets/API.png';
import {Table} from 'react-bootstrap';
import '../App.css';


const Skills = () => {
    return ( 
      <div>
        
        <Table className='FiveColTable' responsive>
          <tbody>
            <tr>
              
              <td><img className='skillHTML' src={html5} alt="" /></td>
              <td></td>
              <td><img className='skillImage' src={firebase} alt="" />Firebase</td>
              <td></td>
              <td><img className='skillJS' src={js} alt="" /></td>
              
            </tr>
            <tr>
              <td></td>      
              <td ><img className='skillCSS' src={css} alt="" /></td>
              <td></td>
              <td ><img className='skillAWS' src={aws} alt="" /></td>
              <td></td>
            </tr>
            <tr>
              
              <td><img className='skillReactjs' src={react} alt="" />React JS</td>
              <td></td>
              <td><img className='skillAPI' src={api} alt="" />APIs</td>
              <td></td>
              <td><img className='skillImage' src={github} alt="" /></td>
              
            </tr>
          </tbody>
        </Table>
        <Table className='ThreeColTable' responsive>
          <tbody>
            <tr>
              <td><img className='skillHTML' src={html5} alt="" /></td>
              <td></td>
              <td><img className='skillImage' src={firebase} alt="" />Firebase</td>
            </tr>
            <tr>
              <td></td>
              <td ><img className='skillCSS' src={css} alt="" /></td>
              <td></td>
            </tr>
            <tr>
              <td ><img className='skillAWS' src={aws} alt="" /></td>
              <td></td>
              <td><img className='skillJS' src={js} alt="" /></td>
            </tr>
            <tr>
              <td></td>
              <td><img className='skillImage' src={react} alt="" />React JS</td>
              <td></td>
            </tr>
            <tr>
              <td><img className='skillAPI' src={api} alt="" />APIs</td>
              <td></td>
              <td><img className='skillImage' src={github} alt="" /></td>
              
            </tr>
          </tbody>
        </Table>
        </div>
    );
}
 
export default Skills;
