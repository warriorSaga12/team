import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import Button from './Button';
import "./team.css"

const Team = () => {
  return (
    <>
    <section>
          <div className="container">
            <div className="c1">
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src="https://images.unsplash.com/photo-1666475966635-f2a4a02fd107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=492&q=80" alt="" /></div>
                <div className="contentBx">
                  <h3>Someone Famous<br/><span>Creative Designer</span></h3>
                </div>
              </div>
                <ul className="sci">
                <li style={{"--i":1}}>
                    <a href="#"><FaFacebook/></a>
                </li>
                <li style={{"--i":2}}>
                    <a href="#"><FaTwitter/></a> 
                </li>
                <li style={{"--i":3}}>
                    <a href="#"><FaLinkedin/></a>
                </li>

                </ul>
                
                </div>
                {/* <div className="button"> */}
                    <Button/>
                {/* </div> */}

            </div>
            <div className="c1">
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src="https://images.unsplash.com/photo-1666475966635-f2a4a02fd107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=492&q=80" alt="" /></div>
                <div className="contentBx">
                  <h3>Someone Famous<br/><span>Creative Designer</span></h3>
                </div>
              </div>
                <ul className="sci">
                <li style={{"--i":1}}>
                    <a href="#"><FaFacebook/></a>
                </li>
                <li style={{"--i":2}}>
                    <a href="#"><FaTwitter/></a> 
                </li>
                <li style={{"--i":3}}>
                    <a href="#"><FaLinkedin/></a>
                </li>

                </ul>
                
                </div>
                {/* <div className="button"> */}
                    <Button/>
                {/* </div> */}

            </div>
            <div className="c1">
            <div className="card">
              <div className="content">
                <div className="imgBx"><img src="https://images.unsplash.com/photo-1666475966635-f2a4a02fd107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=492&q=80" alt="" /></div>
                <div className="contentBx">
                  <h3>Someone Famous<br/><span>Creative Designer</span></h3>
                </div>
              </div>
                <ul className="sci">
                <li style={{"--i":1}}>
                    <a href="#"><FaFacebook/></a>
                </li>
                <li style={{"--i":2}}>
                    <a href="#"><FaTwitter/></a> 
                </li>
                <li style={{"--i":3}}>
                    <a href="#"><FaLinkedin/></a>
                </li>

                </ul>
                
                </div>
                {/* <div className="button"> */}
                    <Button/>
                {/* </div> */}

            </div>
          </div>
        </section>
      </>
  )
}

export default Team