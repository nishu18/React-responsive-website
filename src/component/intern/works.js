import React from 'react'
import styled from "styled-components";
const works = () => {
    return (
        <Wrapper>
            <div className='all'>
            <h3 className='box'>Feature work</h3>
                <div className='box-model'>
                    <div className='box1'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAAXNSR0IArs4c6QAAAoZJREFUSEvtlFtIFAEYhb/Z3dFcEaQEMQMTLWlXzJAierCnFNJKMi+R2OXZICyKQpDVStoS0UiCVjMjLysmiWRWupaGkoghGT0USfgihaKZ7q4zOzELQdGDs7oihAPz9nP+b8458wvm7bEKa/gI6wD/hQOyrKDXC8tq0oo7EGIU+T7jIlDUoSgKguAbyIoAwjcFMT3rJkDU4XLL3jc0JJDZn27NbvgEYNxgQLX7cOoejKGRmEzbiDfF0fr4KQjwtv8lnydmWXBJqwMQEWYkKjqGstIrOF4P8mX8K2fys1mUJERRZODVcy5fq/EpBs0O5OcdwyPLZB1No6Kymtk5F8PvxtiVYKLCWsS5i1e5aSmgd2CMGlstk1MLmlzQDKCqlRQVMDD0gc6unr/EHV3NHMw4SXZmOrmH9pKSdR69TlsZfQJwPGskOSX3H3EVIO3ICSIit2C7U4al1ErvmxH/O6ACZOacYt4p4XTJ3gWSLNP3ws7+1Fx0goCjq4m2tnaq7jb4H6Cq3ELhpRIkSSYhdiNOt8y+5AOYd0RjvXWbb9NOOu3l9PSNUFHdgCR7loTwKYKwsI1kpKdgq2sienMIk1Pz3LhezOjoKLYHrd5D9MR2ge6hCe4/bOXH/KJ/AX6rnc7Pxu12gyCQlGj2Zj4z58ajKLTfK6S5e5zG5rYll6sDPjnwp2Jiggmr5SyFRZW8H/uIeqTUbnTUF9M9+ImK6kf+BVDtlT0KBr0Odbn67wuCjgZ7O8HGIETRQGzMVqLCg2np6MdWZ/cvgGhQ771EvDmO3Uk7vXarrZdlGUmSCAgQvUAej4xOp6e2vkXTLVh2BJo+T8PQOsDaO5B3PEcZGR7WkNbqjPwCkgoQCLP8gt0AAAAASUVORK5CYII=" className='image-box' />
                        <div className='robot'>
                            <h3 className='name-box'>Designing Dashboards</h3>
                            <div className='model'>
                                <h3 className='year'>2020</h3>
                                <h3 className='para'>Dashboard</h3>
                            </div>


                            <p className='head-para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className='box2'>

                        <img src="data:image/png;base64,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" className='image-box' />
                        <div className='robot'>
                            <h3 className='name-box'>Vibrant Portraits of 2020</h3>
                            <div className='model'>
                                <h3 className='year'>2018</h3>
                                <h3 className='para'>Illustration</h3>
                            </div>
                            <p className='head-para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                    <div className='box3'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAYAAABqBU3hAAAAAXNSR0IArs4c6QAAApZJREFUSEvNVTtv01AYPX4ljmPnTZKG0KqVQBFDFyrBBP+DkYkfwH/o2j+AxMDUiYkdNiSWbERR0xRoG5rmjZP4ja6DUzuJsRsJwrdZPvfec8/5vnOpl89fWNhQPXhYAbVJAuTeHgL1ZidQC8uyYFlmIC4swEPg+H0tcJ2mKZgqk0BcWMD/ReDtu2ogcQssKOiIRPhAbBiAR4HXx59wePgKR0dvIIoCkkkRhmGiWv0y34tjk6BpBY8O9jEayYBlodm8WDqLrC+XC6jVmshkkuj1BmAYFtlsEq3WtY0nGA+BjStAmvDpswN8/PAZe3tlTKcKUqkExuMpms1zmzVpQjIJf8WCsFNACGTjeUis5JGeoiibnF0UAHfELX7/Xuk7BYVC1r657bOrHAWkWApRJjr7Qw4iBwSVg3PhfQlsbxcxmShot3srCfDROGiKvvnnIRGW0UIS3saCoB7gOBaapgdp4p0CN4GdnS3wfBTDoYzLy/Z8I8eCdDoN4jlN0zAMA6Zp2t+qpiMuzDKCrFcUFaqqISbw6HWHSKUkdLsD5PMZXF11/Qn4UQ87BaZlwjB0e/Y9Vi1s7NsD8XgM+UIWp43vK3vAsYBlGei6ESi1H2Ctt2DdHHAUcZPxJbBVuoMfrQ52d0toNM7n8+1YUKncR/lewQ4tdxWLOcjjCdLpJL6eXdh9IEkCZHmCfr9vB9jjJ/s4OfmG63bPvwfIO0CSUFG0P1pwG+1VdbqUoP/UglAEyCiRSiREDAajpQs6FggpEWyMCS2APjEw7v9EJJaGRd885UsKkIPJ7Jbu5sEyDOr1s5UWxHMSOJELncPaSIPcGYETcrBY0X7GSXyvbQEvCaAjzNKbs0oSoqmhGpiOxuD4BEAT4rP6BU9fiVV3gDV1AAAAAElFTkSuQmCC" className='image-box' />
                        <div className='robot'>
                            <h3 className='name-box'>36 Days of Malayalam type</h3>
                            <div className='model'>
                                <h3 className='year'>2018</h3>
                                <h3 className='para'>Typography</h3>
                            </div>
                            <p className='head-para'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>


            </div>

        </Wrapper >
    )
}
const Wrapper = styled.section`
padding: 7rem 6rem;
.box-model{
    display:flex;
    flex-direction:column;
    gap:40px;
}

.box{
    font-weight: 400;
font-size: 22px;
line-height: 60px;
/* identical to box height, or 273% */

display: flex;
align-items: flex-end;

/* Dark Color */

color: #21243D;
}
.box1{
    display:flex;
    gap:40px;
}
.box2{
    display:flex;
    gap:40px
}
.box3{
    display:flex;
    gap:40px
}

.image-box{
    width: 227px;
height: 161px;
border-radius: 6px;
}
.model{
    display:flex;
    gap:30px;
}
.robot{
    width:600px;
    display:flex;
    flex-direction:column;
    gap:15px;
}

.name-box{
    font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 44px;


/* Dark Color */

color: #21243D;
}
.year{
    width: 52px;
height: 30px;
border-radius:20px;
background-color: #142850;
font-weight: 900;
font-size: 18px;
line-height: 30px;
color: #FFFFFF;
justify-content:center;

}
.para{
 font-weight: 400;
font-size: 20px;
line-height: 29px;
color: #8695A4;

}
.head-para{
font-weight: 400;

font-size: 14px;
color: #21243D;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .box1{
        display:flex;
        flex-direction:column;
    }
    .box2{
        display:flex;
        flex-direction:column;
    }
    .box3{
        display:flex;
        flex-direction:column;
    }
    .all{
        padding:0 0 15px ;
    }
    .name-box{
       
            font-size:20px;
            
        
    }
    .head-para{
        font-size: 16px;
line-height: 24px;
    }
  }
`;

export default works