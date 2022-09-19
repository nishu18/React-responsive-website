import React from 'react'
import styled from "styled-components";

const Post = () => {
  return (
    <Wrapper>
        <div className='main'>
            <h3 className='name'>Recent post</h3>
             <div className='container grid grid-two-column'>
               {/* <div className='main-container'> */}
               
                <div className='main1'>
                    <h3 className='hero-main'>Making a design system from scratch</h3>
                    <p className='hero-para'>12 Feb 2020  |  Design, Pattern</p>
                    <p className='hero-para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className='main2'>
                    <h3 className='hero-main'>Creating pixel perfect  in Figma</h3>
                    <p className='hero-para'>12 Feb 2020  |  Design, Patter</p>
                    <p className='hero-para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                </div>
            </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.hero-main{
    font-weight: 700;
font-size: 26px;
line-height: 38px;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
.main{
    ${'' /* max-width: 120rem; */}
  ${'' /* margin: 0 auto;
  display: grid;
  gap: 9rem;
  grid-template-columns: repeat(2, 1fr); */}
     width:100%;
     ${'' /* height:300px; */}
    background-color:#EDF7FA;
   
  }
  .main-box{
    margin: 0 auto;
  display: grid;
  gap: 18rem;
  grid-template-columns: repeat(2, 1fr);
  }
  .main-container{

     display: flex;
    
    ${'' /* flex-direction: column; */}
    justify-content: center;
  }
  .main1{
    align-item:center;
    justify-content: center;
    background: #FFFFFF;
border-radius: 4px;
width: 330px;
height: 245px;
box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
border-radius: 4px;
  }
  .main2{
    display: flex;
    flex-direction:column;
    align-item:center;
    justify-content: center;
    background: #FFFFFF;
border-radius: 4px;
width: 330px;
height: 245px;
box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
border-radius: 4px;
  }
  .name{
    
    font-weight: 400;
font-size: 22px;
line-height: 30px;
padding:0 150px;



color: #21243D;

  }
  @media (max-width:${({ theme }) => theme.media.tab}) {
    .container{
      padding: 0 3.2rem;
    }
      .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
    html{
      font-size: 50%;
    }
    .grid{
      gap: 3.2rem;
    }
    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: 1fr;
    }
    .main1{
      padding:0 0px
    }
    .main2{
      padding:0 0px
    }
}
`;

export default Post