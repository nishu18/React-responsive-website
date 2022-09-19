import React from 'react'
import { Button } from '../style/button';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Blog = () => {
    return (
        <Wrapper>
       
            <div className='container grid grid-two-column'>
                <div className='section-hero-data'>
                    <h3 className='hero-heading'>Hi, I am John,
                        Creative Technologist</h3>


                    <p className='hero-para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Button className='btn hireme-btn'>
                        <NavLink to="/contact">Download Resume</NavLink>
                    </Button>
                </div>

                <div className='section-hero-image'>
                    <picture>
                        <img src="./images/my.jpeg" alt='' className='hero-img' />
                    </picture>
                </div>
            </div>
            
          
        </Wrapper>
        
    )
}

const Wrapper=styled.section`
   padding: 15rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .gap{
    gap:50px;
  }
  .btn {
    max-width: 16rem;
    background-color:red;
  }
  .hero-top-data {
    ${'' /* text-transform: uppercase; */}
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    ${'' /* text-transform: uppercase; */}
    font-size: 4.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;

    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 60%;
    border-radius:50%;
  }
  .hero-main{
    font-weight: 700;
font-size: 26px;
line-height: 38px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;


export default Blog