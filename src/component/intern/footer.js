import React from 'react'
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <Wrapper>
            <div className="footer-social">
                
                <div className="footer-social--icons">
                    <div>
                        <FaFacebook className="icons" />
                    </div>
                    <div>
                        <FaInstagram className="icons" />
                    </div>
                    <div>
                       
                            <FaTwitter className="icons" />
                       
                    </div>
                    <div>
                       
                       <FaLinkedinIn className="icons" />
                  
               </div>
                    </div>
                    <p className='copy'>Copyright ©2020 All rights reserved </p>
                    </div>

        </Wrapper>
                )
}
const Wrapper = styled.section`
 
 .footer-social{
    align-item:center;
    justify-content:center;
 }   
   
.footer-social--icons {
    background-color: #FFFFFF;
    justify-content:center;
/* identical to box height */

text-align: center;
display: flex;
gap: 2rem;
    div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
    .icons {
          color:#21243D;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .copy{
        font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */

text-align: center;

/* Dark */

color: #21243D;
    }
 `;
 export default Footer