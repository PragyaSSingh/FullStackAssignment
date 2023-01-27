import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import "../css/welcome.css"
import { Button, Container, Row } from "react-bootstrap";

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(()=>{
      const token = localStorage.getItem('recipe_token');
      if(token){
          navigate('/home');
      }
  },[])
  
  return (
   
    

    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
            <h1 className="title"> </h1>
              <p className="subtitle"></p>
            </div>
            <div className="buttonContainer">
            <div className='cook_cont'>
            <h1 className='cook'>Welcome to CookPad</h1>
            </div>
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>

    

  )
}
const SLink = styled(Link)`
  background-color: #BB2B1B;
  border: none;
  color: white;
  padding: 25px 30px;
  text-align: center;
  text-decoration: none;
  ${'' /* display: inline-block; */}
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
   width:100px;
   justify-content: center;
   align-items:center;
  font-size: 25px;
  margin: 4px 2px;
  cursor: pointer;
  z-index:-1;
  :hover{
  background-color: #4D8B16;
  color: white;


  }


`;
const Baap= styled.div`
  position: absolute;
  top: 40%;
    right: 30%;
`;

const Butto = styled.div`
margin-bottom: 2rem;
`;
const Bu = styled.div`
`;


const Wrapper = styled.div`
  
  background-image: url("https://wallpaperforu.com/wp-content/uploads/2020/08/food-wallpaper-20080219232012.jpg");
  position: relative;
  height: 100vh;
  width:100vw;
  display:flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

`;


export default Welcome