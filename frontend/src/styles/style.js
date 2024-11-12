import styled from 'styled-components';


export const MainContainer = styled.div`
position: relative;
width: 95%;
height: 720px;
margin: 0 auto;

`;

export const MainImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
display: block;
border-radius: 10px;
`;

export const TextOverlay = styled.div`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-106%, 5%);
color: #F5F5F5;
text-align: center;
`;

export const Heading = styled.h1`
font-size: 3rem;
margin-bottom: 1rem;
color: #F5F5F5;
text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

export const Subheading = styled.h3`
font-size: 1.5rem;
color: #B0B0B0;
margin-bottom: 1.5rem;
`;



export const Button = styled.button`
padding: 10px 20px;
background-color: #B0BEC5;
color: #121212;
border: none;
border-radius: 5px;
font-weight: bold;
cursor: pointer;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
transition: background-color 0.3s ease;

&:hover {
  background-color: #CFD8DC;
}
`;

export const InputDiv = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
gap: 20px; 
flex-wrap: wrap;
`;

export const InputField = styled.input`
padding: 10px;
width: 80%;
max-width: 400px;
background-color: #2C2C2E;
border: none;
border-radius: 5px;
color: #FFFFFF;
margin-bottom: 1rem;
font-size: 1rem;
text-align: center;


`;

export const ErrorText = styled.p`
color: #FF4C4C;
font-size: 0.9rem;
margin-top: -10px;
margin-bottom: 1rem;
margin-left: 40px;
`;
